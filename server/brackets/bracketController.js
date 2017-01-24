var Q = require('q');
var Bracket = require('./bracketModel.js');

var findBrackets = Q.nbind(Bracket.find, Bracket);
var createBracket = Q.nbind(Bracket.create, Bracket);
var getBracket = Q.nbind(Bracket.findOne, Bracket);

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
  },

  getBracket: function(req, res, next) {
    console.log('GRABBING YOUR BRACKET...');

    getBracket({name: req.params.name})
      .then(function(bracket) {
        console.log('BRACKET FOUND!', bracket);
        res.json(bracket);
      })
      .fail(function(err) {
        next(err);
      });
  }

};