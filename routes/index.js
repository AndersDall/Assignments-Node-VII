var express = require('express');
var router = express.Router();
var continent = require('../public/javascripts/script.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.params);
	console.log(req.body);
	console.log(req.url);
	console.log(req.query);
  res.render('index', { title: 'Home' });

});

/* GET about page. */
router.get('/omos', function(req, res, next) {
  console.log(req.params);
	console.log(req.body);
	console.log(req.url);
	console.log(req.query);
  res.render('omos', { title: 'Om os' });

});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  console.log(req.params);
	console.log(req.body);
	console.log(req.url);
	console.log(req.query);
  res.render('contact', { title: 'Kontakt' });

});

/* GET continents page. */
router.get('/continents', function(req, res, next) {

  res.render('continents', { title: 'Kontinents', obj: continent });

});

module.exports = router;
