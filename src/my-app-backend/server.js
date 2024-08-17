// npm install express mongoose bcrypt body-parser cors ejs dotenv

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 27017;
// const dbURI = process.env.MONGODB_URI;
// const dbURI = 'mongodb://localhost:27017/your-database-name';



// Middleware// npm install express mongoose bcrypt body-parser cors ejs dotenv

app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));
// localhost
mongoose.connect('mongodb://localhost:27017/AKAFTA!!', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected locally'))
  .catch(err => console.error('MongoDB connection error:', err));


// User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err });
}

app.use(errorHandler);

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the provided details
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Exclude the password from the response object
    const userResponse = {
      id: user._id,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber
    };

    // Send success response
    res.status(200).json({ message: 'Login successful', user: userResponse });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../build/index.html')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'bulid', 'index.html'));
  console.log(path.join(__dirname, 'build', 'index.html'))
});



// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
