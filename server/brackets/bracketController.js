var Bracket = require('./bracketModel.js');

module.exports = {

  allBrackets: function(req, res, next) {
    Bracket.find({}, 'name', function(err, brackets) {
      if (err) {
        console.error(err);
      } else {
        res.json(brackets);
      }
    });
  }

};