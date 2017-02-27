var Bracket = require('./bracketModel.js');

module.exports = {

  allBrackets: function(req, res) {
    Bracket.find({}, function(err, data) {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    });
  },

  saveBracket: function(req, res) {

    var name = req.body.name;
    var teams = req.body.teams;
    var size = req.body.size;

    var newBracket = {
      name: name,
      teams: teams,
      size: size
    };

    createBracket(newBracket);
    res.send(newBracket);
  },

  updateBracket: function(req, res) {

    var name = req.body.name;
    var teams = req.body.teams;
    var size = req.body.size;

    var newBracket = {
      name: name,
      teams: teams,
      size: size
    };

    Bracket.findOneAndUpdate({name: name}, newBracket, function(err, res) {
      if (err) {
        console.error(err);
      } else {
        res.send(res);
      }
    });
  }

};