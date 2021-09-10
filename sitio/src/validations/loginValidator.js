const {body} = require('express-validator');
const path = require('path')
const fs = require('fs')
const usuariosPath = path.join(__dirname, '..', 'data', 'users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosPath, 'utf-8'));
const bcrypt = require('bcryptjs');

module.exports = [
body('email')
.custom((value,{req}) => {
    let usuario = usuarios.find(usuario => usuario.email === value && bcrypt.compareSync(req.body.password,
        usuario.password));

        if (usuario) {
            return true
        }else {
            return false
        }
}).withMessage('Credenciales inválidas')
]