var express = require('express');
var router = express.Router();
let {login,registro,pass,word} = require('../controllers/usersController');

/* GET users listing. */
router.get('/login', login);
router.get('/registro', registro);
router.get('/forgot', pass);
router.get('/forgot2', word);

module.exports = router;
