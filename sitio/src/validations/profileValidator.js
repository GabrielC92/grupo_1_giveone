const {check,body} = require('express-validator');

const db = require('../database/models');
const bcrypt = require('bcryptjs');

let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,})+$/;

module.exports = [

    body('name')
    .custom((value,{req}) => {
        if (value !=  "") {
            if (regExLetter.test(value)) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }).withMessage('Solo se admiten caracteres alfabeticos').bail()
    .custom((value,{req}) => {
        if (value !=  "") {
            if (value.length >= 2) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }).withMessage('Debe tener como mínimo 2 letras'),

    body('lastName')
    .custom((value,{req}) => {
        if (value !=  "") {
            if (regExLetter.test(value)) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }).withMessage('Solo se admiten caracteres alfabeticos').bail()
    .custom((value,{req}) => {
        if (value !=  "") {
            if (value.length >= 2) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }).withMessage('Debe tener como mínimo 2 letras'),

    body('email')
    .custom((value,{req}) => {
        if (value != "") {
            if (regExEmail.test(value)) {
                return true;
            } else{
                return false;
            }
        }
        return true;
    }).withMessage('Debe ingresar un email válido'),

    body('oldPass')
    .notEmpty().withMessage('Ingrese su contraseña').bail()
    .custom((value,{req}) => {
        return db.User.findOne({
            where: {
                id: req.session.userLogin.id
            }
        })
            .then(user => {
                if (value != "") {
                    if (bcrypt.compareSync(value, user.password)) {
                        return true;
                    } else {
                        return Promise.reject('Contraseña incorrecta');
                    }
                }
            })
    }),

    check('pass')
    .custom((value,{req}) => {
        if (value != "") {
            if (value.length >= 8 && value.length <= 16) {
                return true;
            } else{
                return false;
            }
        }
        return true;
    }).withMessage('La nueva contraseña debe tener de 8 a 16 caracteres'),

    body('pass2')
    .custom((value,{req}) => {
        if(value !== req.body.pass && value.length != 0){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide')
]