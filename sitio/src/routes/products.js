const express = require('express');
const router = express.Router();

const {add,store,detail,edit,update,destroy} = require("../controllers/productController")

/*/product*/
router.get('/add',add);
router.post('/add',store);
router.get('/detail/:id',detail);
router.get('/edit/:id',edit);
router.put('/edit/:id',update);
router.delete('/destroy/:id',destroy);



module.exports = router;