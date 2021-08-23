let express = require('express');
let router = express.Router();
const path = require('path');
const multer = require('multer');
let {data,create,store,edit,update,destroy} = require('../controllers/adminController');

// Configuración Multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/images/products');
    },
    filename: (req,file,cb) => {
        cb(null,`img-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const uploadFile = multer({storage});

// Rutas del administrador
router.get('/productos', data);
router.get('/create', create);
router.post('/create', uploadFile.single('image'), store);

router.get('/edit/:id', edit);
router.put('/edit/:id', update);

router.delete('/delete/:id', destroy);

module.exports = router;