var Q = require('q');
var Bracket = require('./bracketModel.js');

var findBrackets = Q.nbind(Bracket.find, Bracket);
var createBracket = Q.nbind(Bracket.create, Bracket);

module.exports = {

  allBrackets: function(req, res, next) {
    console.log('IN BRACKET CONTROLLER...');

    findBrackets({})
      .then(function(brackets) {
        console.log('BRACKETS FOUND:', brackets);
        res.json(brackets);
      })
      .fail(function(err) {
        next(err);
      });
  },

  newBracket: function(req, res, next) {
    console.log('POSTING TO BRACKET CONTROLLER...');

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
  }

};