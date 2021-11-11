var express = require('express');
var router = express.Router();
let { search } = require('../../controllers/apis/indexController');

/* /api */
router.get('/search', search);

module.exports = router;