const fs = require('fs');
const path = require('path');
const productFilePath = path.join(__dirname,'..','data','products_db.json');
const products = JSON.parse(fs.readFileSync(productFilePath,'utf-8'));

module.exports = {
    home: (req,res) => {
        return res.render('index',{
            products
        });
    },
    detalle: (req,res) => {
        let product = products.find(product => product.id == +req.params.id);
        return res.render('productDetail',{
            product
        });
    },
    carrito: (req,res) => {
        return res.render('productCart');
    },
    pago: (req,res) => {
        return res.render('formaDePago');
    },
    compra: (req,res) => {
        return res.render('compra');
    },
}