const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');

app.use(morgan(function( tokens, req, res){
  return [tokens.method(req, res), tokens.url(req, res), tokens.status(req, res)].join(' ');
}));

app.get('/', function (req, res) {
  res.send('Welcome friend :)');
});


app.listen(3000, function() {
  console.log('Server listening :)');
});
