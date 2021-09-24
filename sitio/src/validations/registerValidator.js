const {check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('lastName')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),

    check('pass')
    .notEmpty().withMessage('Elija una contraseña').bail()
    .isLength({
        max : 12,
        min : 6
    }).withMessage('La contraseña debe tener de 6 a 12 caracteres'),

    body('pass2')
    .notEmpty().withMessage('Confirme la contraseña').bail()
    .custom((value,{req}) => {
        if(value !== req.body.pass){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide'),

    check('aceptar')
    .isString('on').withMessage('Debes aceptar los términos y condiciones')
]