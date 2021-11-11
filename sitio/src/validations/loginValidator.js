const {body, check} = require('express-validator');

const db = require('../database/models');
const bcryptjs = require('bcryptjs');

module.exports = [
    check('email').notEmpty().withMessage('Ingresa un email').bail()
    .isEmail().withMessage('Ingresa un email válido').bail(),

    body('email')
    .custom((value,{req}) => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
            .then(user => {
                if (!user) {
                    return Promise.reject();
                }
            }).catch(() => Promise.reject('El email no está registrado, haz clic en "Registrate"!'))
    }),

    check('pass').notEmpty().withMessage('Escriba la contraseña'),

    body('pass')
    .custom((value,{req}) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (!user || !bcryptjs.compareSync(value, user.password)) {
                    return Promise.reject();
                }
            }).catch(() => Promise.reject('Credenciales inválidas'))
    }),
]