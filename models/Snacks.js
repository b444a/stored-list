const mongoose = require('mongoose');

const snackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Snack = mongoose.model('Snack', snackSchema);

module.exports = Snack;