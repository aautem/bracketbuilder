var mongoose = require('mongoose');

var BracketSchema = new mongoose.Schema({
  name: String,
  teams: Array,
  size: Number
});

module.exports = mongoose.model('Bracket', BracketSchema);