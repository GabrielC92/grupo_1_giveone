var express = require('express');
var router = express.Router();
let {getMails, verifyPassword} = require('../../controllers/apis/usersController');

/* /api */
router
    .get('/emails', getMails)
    .post('/verify-password', verifyPassword)

module.exports = router;
