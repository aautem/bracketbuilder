var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// create server
var app = express();

var mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

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