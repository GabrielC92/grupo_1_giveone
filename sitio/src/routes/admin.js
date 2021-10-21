let express = require('express');
let router = express.Router();
const uploadFile = require('../middlewares/productStorage');
const adminCheck = require('../middlewares/adminCheck');
const productValidation = require('../validations/productsValidator')

let {data,create,store,edit,update,destroy} = require('../controllers/adminController');

// Rutas del administrador
router.get('/products', adminCheck, data);
router.get('/products/create', adminCheck, create);
router.post('/products/create', uploadFile.array('image'),store);

router.get('/products/edit/:id', adminCheck, edit);
router.put('/products/edit/:id', uploadFile.array('image'), update);

router.delete('/products/delete/:id', destroy);

module.exports = router;