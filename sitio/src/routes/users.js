var express = require('express');
var router = express.Router();
let {login,processLogin,registro,processRegistro,pass,word,profile} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
const avatar = require('../middlewares/userStorage');

/* GET users listing. */
router.get('/registro', registro);
router.post('/registro', avatar.single('user'), registerValidator, processRegistro);

router.get('/login', login);
router.post('/login',loginValidator, processLogin);

router.get('/forgot', pass);
router.get('/forgot2', word);

router.get('/profile', profile);

module.exports = router;
