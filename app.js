const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks');

app.use(morgan(function( tokens, req, res){
  return [tokens.method(req, res), tokens.url(req, res), tokens.status(req, res)].join(' ');
}));

var locals = {
    title: 'Hello!',
    people: [ {name: 'Grace'}, {name: 'Sarah'}, {name: 'Hermione'}]
  };

nunjucks.configure(['views']);
nunjucks.render('index.html', locals, function (err, output) {
    if (err) throw err;
    console.log(output);
  });

app.get('/', function (req, res) {
  res.send('hi!');
});


app.listen(3000, function() {
  console.log('Server listening :)');
});
