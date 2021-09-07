const path = require('path');
const multer = require('multer');

// Configuración Multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'./public/images/users');
    },
    filename: (req,file,cb) => {
        cb(null,`user-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const avatar = multer({storage});

module.exports = avatar;