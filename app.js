// app.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Session Configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Routes
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/dashboard'));
app.use('/', require('./routes/exnessRoutes'));


// Redirect root to sign-up
app.get('/', (req, res) => res.redirect('/sign-up'));

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
