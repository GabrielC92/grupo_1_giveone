var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/producto', function(req, res) {
  res.render('productDetail');
});
router.get('/cart', function(req, res) {
  res.render('productCart');
});
router.get('/formasDePago', function(req, res) {
  res.render('formaDePago');
});
router.get('/compra', function(req, res) {
  res.render('compra');
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.get('/registro', function(req, res) {
  res.render('register');
});
router.get('/forgot', function(req, res) {
  res.render('forgot');
});
router.get('/forgot2', function(req, res) {
  res.render('forgot2');
});

module.exports = router;
