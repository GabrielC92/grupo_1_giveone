const fs = require('fs');
const path = require('path');
const productFilePath = path.join(__dirname,'..','data','products_db.json');
const products = JSON.parse(fs.readFileSync(productFilePath,'utf-8'));

module.exports = {
    data: (req,res) => {
        return res.render('admin/products',{
            products
        })
    },
    create: (req,res) => {
        return res.render('admin/productCreate')
    },
    store: (req,res) => {},
    edit: (req,res) => {
        let product = products.find(product => product.id == +req.params.id);
        return res.render('admin/productEdit',{
            product
        });
    },
    update: (req,res) => {},
    destroy: (req,res) => {}
}