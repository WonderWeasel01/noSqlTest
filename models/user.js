const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Definerer skemaet for en bruger

const UserSchema = new Schema({
  name: { type: String, required: true },

  age: { type: String, required: true, unique: true },

  yearsInBasement: { type: String, required: true },
});

// Eksporterer modellen så den kan bruges i andre filer

module.exports = mongoose.model('User', UserSchema);
