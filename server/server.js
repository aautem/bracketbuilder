var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/bracketbuilder');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  console.log('Database connected!');
});

var bracketSchema = mongoose.Schema({
  name: String
});

var Bracket = mongoose.model('Bracket', bracketSchema);

var nba = new Bracket({ name: 'NBA Playoffs' });

nba.save(function (err, nba) {
  if (err) {
    console.error(err);
  } else {
    console.log(nba);
  }
});

app.set('port', (process.env.PORT || 8000));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.get('/test', function(req, res, next) {
  console.log('Testing...');
  Bracket.find({})
    .then(function(results) {
      res.send(results);
    });
});

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
