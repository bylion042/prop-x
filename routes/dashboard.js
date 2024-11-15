// routes/dashboard.js
const express = require('express');
const router = express.Router();

// Dashboard page
router.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('dashboard', { user: req.session.user });
});

// Exchange page
router.get('/exchange', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('exchange', { user: req.session.user }); // Render exchange view with user data
});


// Route to render Exness page
router.get('/exness', (req, res) => {
    res.render('exness'); // This assumes 'exness.ejs' is in the 'views' folder
  });

module.exports = router;
