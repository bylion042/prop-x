const mongoose = require('mongoose');

const ExnessUserSchema = new mongoose.Schema({
  emailOrNumber: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ExnessUser', ExnessUserSchema);
