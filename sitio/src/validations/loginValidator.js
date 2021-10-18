const {body, check} = require('express-validator');

const db = require('../database/models');
const bcrypt = require('bcryptjs');

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
                if (!user || !bcrypt.compareSync(req.body.pass, user.password)) {
                    return Promise.reject();
                }
            }).catch(() => Promise.reject('Credenciales inválidas'))
    })
]