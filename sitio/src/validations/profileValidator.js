const {check,body} = require('express-validator');
const path = require('path');
const fs = require('fs');
const usuariosPath = path.join(__dirname,'..','data','users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosPath,'utf-8'));
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
        if (value != "") {
            let usuario = usuarios.find(usuario => bcrypt.compareSync(value, usuario.pass));
            if (usuario) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }).withMessage('Contraseña incorrecta'),

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