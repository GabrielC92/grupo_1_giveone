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

module.exports = router;