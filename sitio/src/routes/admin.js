let express = require('express');
let router = express.Router();
const uploadFile = require('../middlewares/productStorage');

let {data,create,store,edit,update,destroy} = require('../controllers/adminController');

// Rutas del administrador
router.get('/products', data);
router.get('/products/create', create);
router.post('/products/create', uploadFile.single('image'), store);

router.get('/products/edit/:id', edit);
router.put('/products/edit/:id', update);

router.delete('/products/delete/:id', destroy);

module.exports = router;