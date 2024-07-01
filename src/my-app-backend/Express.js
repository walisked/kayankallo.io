const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Your User model
const router = express.Router();

// User registration endpoint
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, bvn, dob } = req.body;

  // Validate input data here

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      bvn,
      dob
    });

    // Save the user to MongoDB
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

module.exports = router;
