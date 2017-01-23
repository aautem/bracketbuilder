var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
