var mongoose = require('mongoose');

var bracketSchema = new mongoose.Schema({
  name: String,
  teams: Array,
  size: Number
});

module.exports = mongoose.model('Bracket', bracketSchema);

// var nba = new Bracket({ name: 'NBA Playoffs' });

// nba.save(function (err, nba) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(nba);
//   }
// });