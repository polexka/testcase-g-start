const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  index: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('card', cardSchema);