var express = require('express');
var router = express.Router();
let {home,detalle,carrito,pago,compra} = require('../controllers/indexController');

/* GET home page. */
router.get('/', home);

router.get('/producto/:id', detalle);
router.get('/cart', carrito);
router.get('/formasDePago', pago);
router.get('/compra', compra);

module.exports = router;