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
        let usuario = usuarios.find(usuario => bcrypt.compareSync(req.body.oldPass.trim(), usuario.pass));
        if (usuario) {
            return true;
        } else {
            return false;
        }
    }).withMessage('Contraseña incorrecta'),

    check('pass')
    .isLength({
        max : 12,
        min : 6
    }).withMessage('La nueva contraseña debe tener de 6 a 12 caracteres'),

    body('pass2')
    .notEmpty().withMessage('Confirme la nueva contraseña').bail()
    .custom((value,{req}) => {
        if(value !== req.body.pass){
            return false
        }
        return true
    }).withMessage('La verificación de la contraseña no coincide')
]