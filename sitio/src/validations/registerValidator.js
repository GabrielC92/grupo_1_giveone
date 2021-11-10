const {check, body} = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isAlpha().withMessage('Solo se admiten caracteres alfabéticos').bail()
    .isLength({min: 2}).withMessage('Debe tener como mínimo 2 letras'),

    check('lastName')
    .notEmpty().withMessage('El apellido es obligatorio').bail()
    .isAlpha().withMessage('Solo se admiten caracteres alfabéticos').bail()
    .isLength({min: 2}).withMessage('Debe tener como mínimo 2 letras'),

    check('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),

    body('email')
    .custom(value => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
            .then(user => {
                if (user) {
                    return Promise.reject('El email ya se encuentra registrado')
                }
            })
    }),

    check('pass')
    .notEmpty().withMessage('Elija una contraseña').bail()
    .isLength({
        max : 16,
        min : 8
    }).withMessage('La contraseña debe tener de 8 a 16 caracteres'),

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