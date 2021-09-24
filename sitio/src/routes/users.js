var express = require('express');
var router = express.Router();
let {login,processLogin,registro,processRegistro,pass,word,profile,profileUpdate,logout} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');
const avatar = require('../middlewares/userStorage');

/* GET users listing. */
router.get('/registro', registro);
router.post('/registro', avatar.single('user'), registerValidator, processRegistro);

router.get('/login', login);
router.post('/login', loginValidator, processLogin);

router.get('/forgot', pass);
router.get('/forgot2', word);

router.get('/profile', profile);
router.put('/profile', avatar.single('user'), profileValidator, profileUpdate);

router.get('/logout',logout);

module.exports = router;
