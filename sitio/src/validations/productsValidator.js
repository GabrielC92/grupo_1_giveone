const {check,body} = require('express-validator');
const path = require('path');
const fs = require('fs');
const db = require('../database/models')
const bcrypt = require('bcryptjs');



module.exports = [
    check('name').notEmpty().withMessage('El nombre es obligatorio'),
    check('description').notEmpty().withMessage('La descripcion es obligatorio'),
    check('price').notEmpty().withMessage('El precio es obligatorio').bail()
    .isInt().withMessage('Tiene que ser un número'),
    check('categoryId').notEmpty().withMessage('Indica la categoria')
]