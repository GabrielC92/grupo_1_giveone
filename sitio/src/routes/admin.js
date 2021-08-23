let express = require('express');
let router = express.Router();
let {create,store,edit,update,destroy} = require('../controllers/adminController');

// Rutas del administrador
router.get('/create', create);
router.post('/create', store);

router.get('/edit/:id', edit);
router.put('/edit/:id', update);

router.delete('/delete/:id', destroy);

module.exports = router;