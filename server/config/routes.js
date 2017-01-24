var bracketController = require('../brackets/bracketController.js');

module.exports = function (app, express) {
  app.get('/test', function(req, res, next) {
    console.log('Testing...');
    Bracket.find({})
      .then(function(results) {
        res.send(results);
      });
  });

  app.get('/api/brackets/', bracketController.allBrackets);
  // app.post('/api/brackets/', bracketController.newBracket);
};