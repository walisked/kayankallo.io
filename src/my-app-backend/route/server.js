const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  accountName: String,
  accountNumber: String,
  bankCode: String,
  currency: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { name, email, phoneNumber } = req.body;

  try {
    // Save user to MongoDB
    const newUser = new User({
      name,
      email,
      phoneNumber,
    });
    await newUser.save();

    // Create wallet
    const walletResponse = await axios.post('https://wema-alatdev-apimgt.azure-api.net/alat-wallet/api/Wallets/CreateWallet', {
      phoneNumber,
      name,
      email,
      walletType: 0,
      accountNumber: 'userAccountNumber', // Replace with actual user account number
      principalAgentWalletNo: 'principalAgentWalletNo', // Replace with actual principal agent wallet number
      pin: 'userPin', // Replace with actual user pin
    });

    if (walletResponse.data.hasError) {
      return res.status(400).json({ error: walletResponse.data.errorMessage });
    }

    // Update user with wallet details
    newUser.accountName = walletResponse.data.result.accountName;
    newUser.accountNumber = walletResponse.data.result.accountNumber;
    newUser.bankCode = walletResponse.data.result.bankCode;
    newUser.currency = walletResponse.data.result.currency;
    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
