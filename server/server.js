var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
  res.send('Hello World');
});

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
