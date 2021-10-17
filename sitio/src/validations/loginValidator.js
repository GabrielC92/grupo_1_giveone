const {body, check} = require('express-validator');
const path = require('path');
const fs = require('fs');
//const usuariosPath = path.join(__dirname,'..','data','users.json');
//const usuarios = JSON.parse(fs.readFileSync(usuariosPath,'utf-8'));
const bcrypt = require('bcryptjs');

/* module.exports = [
    check('email').notEmpty().withMessage('Ingresa un email').bail()
    .isEmail().withMessage('Ingresa un email válido').bail(),

    body('email')
    .custom((value,{req}) => {
        let usuario = usuarios.find(usuario => usuario.email === value.trim() && bcrypt.compareSync(req.body.pass.trim(), usuario.pass));
    
            if (usuario) {
                return true;
            }else {
                return false;
            }
    }).withMessage('Credenciales inválidas')

] */