// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Render Sign-up Page
router.get('/sign-up', (req, res) => {
    res.render('sign-up', { message: "" });
});

// Handle Sign-up
router.post('/sign-up', async (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;

    if (password.length < 5) {
        return res.render('sign-up', { message: "Password must be at least 5 characters long." });
    }

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.render('sign-up', { message: "Username already taken." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await new User({ username, email, firstName, lastName, password: hashedPassword }).save();
        res.redirect('/login');
    } catch (err) {
        console.log(err);
        res.render('sign-up', { message: "An error occurred. Try again." });
    }
});

// Render Login Page
router.get('/login', (req, res) => {
    res.render('login', { message: "" });
});

// Handle Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        // Check if the user exists and if the password matches
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user; // Save user data in session
            res.redirect('/dashboard'); // Redirect to dashboard on successful login
        } else {
            // Show error message if credentials are invalid
            res.render('login', { message: "Invalid email or password." });
        }
    } catch (err) {
        console.log(err);
        res.render('login', { message: "An error occurred. Please try again." });
    }
});

module.exports = router;
