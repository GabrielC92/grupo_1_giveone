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
// Tipos de archivos
const fileFilter = function(req,file,cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        req.fileValidationError = "Solo se permite imágenes .jpg, .jpeg, .png y .gif";
        return cb(null,false,req.fileValidationError);
    }
    cb(null,true);
}

const avatar = multer({
    storage,
    fileFilter
});

module.exports = avatar;