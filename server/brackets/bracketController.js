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
    let bracket = {
      name: req.body.name,
      teams: req.body.teams,
      size: req.body.size
    };
    Bracket.findOneAndUpdate({name: bracket.name}, bracket, function(err, data) {
      if (err) {
        console.error(err);
      } else if (!data) {
        bracket = new Bracket(bracket);
        bracket.save(function(err, bracket) {
          console.log('Creating bracket:', bracket);
          res.send(bracket);
        });
      } else {
        console.log('Bracket Updated.');
        res.send(data);
      }
    });
  },

  deleteBracket: function(req, res) {
    console.log('Bracket (server):', req.params.id);
    let id = req.params.id;
    Bracket.remove({_id: id}, function(err) {
      if (err) {
        console.error(err);
      } else {
        res.send('Bracket Deleted.');
      }
    });
  }

};