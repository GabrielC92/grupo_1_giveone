const {check,body} = require('express-validator');
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

module.exports = [

    body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    body('lastName')
    .notEmpty().withMessage('El nombre es obligatorio'),

    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un email válido'),

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
                //return true;
            })
    }),

    check('pass')
    .custom((value,{req}) => {
        if (value != "") {
            if (value.length >= 6 && value.length <= 12) {
                return true;
            } else{
                return false;
            }
        }
        return true;
    }).withMessage('La nueva contraseña debe tener de 6 a 12 caracteres'),

    body('pass2')
    .custom((value,{req}) => {
        if(value !== req.body.pass && value.length != 0){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide')
]