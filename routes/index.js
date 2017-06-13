const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  let tweets = tweetBank.find({'name': req.params.name});
  // let displayName = req.params.name;
  // let nameArr = displayName.split(' ');
  // let space = ' ';
  // res.render('index', {tweets: tweets, showForm: true, displayName: true, firstName : nameArr[0], space: space, lastName : nameArr[1] } );
  console.log(tweets);
  res.render('index', {tweets: tweets, showForm: true, displayName: name} );

});

router.get('/tweets/:id', function(req, res) {
  let tweets = tweetBank.find({'id': parseInt(req.params.id)});
  res.render('index', {tweets: tweets} );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
