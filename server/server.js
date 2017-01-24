var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// create server
var app = express();

var mongodbUri = 'mongodb://heroku_wtmxnf01:ke5jtrirq9qt536f1v6u8i9vbl@ds127439.mlab.com:27439/heroku_wtmxnf01';

// connect to database
mongoose.connect(mongodbUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!');
});

// set server port
app.set('port', (process.env.PORT || 8000));

// add middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

// route handling
require('./config/routes.js')(app, express);

// start the server
app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});

module.exports = app;