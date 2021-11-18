var express = require('express');
var router = express.Router();
let {home,search,detalle,carrito,pago,compra,about} = require('../controllers/indexController');

/* GET home page. */
router.get('/', home);

router.get('/search', search);
router.get('/products/:id', detalle);
router.get('/cart', carrito);
router.get('/formasDePago', pago);
router.get('/compra', compra);
router.get('/about', about);

module.exports = router;