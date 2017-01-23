var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.send('Hello World');
});

app.listen(8000);
