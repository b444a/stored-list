const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('snack', snackSchema);
