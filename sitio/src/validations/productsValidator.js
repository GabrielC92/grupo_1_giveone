const {check,body} = require('express-validator');
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre Deberá tener al menos 5 caracteres').bail()
    .isLength({min: 5}).withMessage('El nombre debe contener al menos 5 caracteres'),

    check('description')
    .notEmpty().withMessage('La descripción es obligatoria').bail()
    .isLength({min: 20}).withMessage('La descripción debe contener al menos 20 caracteres'),

    check('price')
    .notEmpty().withMessage('Debes indicar el precio')
    .isDecimal().withMessage('Debe ser un número'),

    check('categoryId')
    .notEmpty()
    .withMessage('Indica la categoría')

]



