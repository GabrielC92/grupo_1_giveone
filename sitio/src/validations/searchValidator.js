const {check} = require('express-validator');

module.exports = [
    check('search')
    .notEmpty().withMessage('Ingrese al menos un carácter para la búsqueda').bail()
    .isAlpha().withMessage('Solo debes usar letras')
]