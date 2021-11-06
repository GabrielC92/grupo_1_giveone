var express = require('express');
var router = express.Router();
let {home,search,detalle,carrito,pago,compra} = require('../controllers/indexController');
let searchValidator = require('../validations/searchValidator');

/* GET home page. */
router.get('/', home);

router.get('/search', searchValidator, search);
router.get('/products/:id', detalle);
router.get('/cart', carrito);
router.get('/formasDePago', pago);
router.get('/compra', compra);

module.exports = router;