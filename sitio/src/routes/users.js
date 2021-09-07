var express = require('express');
var router = express.Router();
let {login,processLogin,registro,processRegistro,pass,word} = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator');
const avatar = require('../middlewares/userStorage');

/* GET users listing. */
router.get('/registro', registro);
router.post('/registro', avatar.single('user'), registerValidator, processRegistro);

router.get('/login', login);
router.post('/login', processLogin);

router.get('/forgot', pass);
router.get('/forgot2', word);

module.exports = router;
