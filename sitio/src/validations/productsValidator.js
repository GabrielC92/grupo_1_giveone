const {check,body} = require('express-validator');
const path = require('path');
const fs = require('fs');
const usuariosPath = path.join(__dirname,'..','data','users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosPath,'utf-8'));
const bcrypt = require('bcryptjs');

module.exports = [
    check('oldPass')
    .notEmpty().withMessage('Ingrese su contraseña').bail()
]