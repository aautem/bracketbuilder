// dependencies
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// create server
var app = express();

// connect to database
mongoose.connect('mongodb://localhost/bracketbuilder');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  console.log('Database connected!');
});

// var bracketSchema = mongoose.Schema({
//   name: String
// });

// var Bracket = mongoose.model('Bracket', bracketSchema);

// var nba = new Bracket({ name: 'NBA Playoffs' });

// nba.save(function (err, nba) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(nba);
//   }
// });

// set server port
app.set('port', (process.env.PORT || 8000));

// add middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

// route handling
require('./config/routes.js')(app, express);

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
