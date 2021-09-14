const fs = require('fs');
const path = require('path');
const productFilePath = path.join(__dirname,'..','data','products_db.json');
const products = JSON.parse(fs.readFileSync(productFilePath,'utf-8'));

module.exports = {
    home: (req,res) => {
        return res.render('index',{
            title: 'Home',
            products
        });
    },
    search: (req,res) => {
        if (req.query.search) {
            let resultado = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase().trim()));

            return res.render('index',{
                title: 'Resultado de la búsqueda',
                products: resultado,
                search: req.query.search
            });  
        }
        return res.redirect('/');
    },
    detalle: (req,res) => {
        let product = products.find(product => product.id == +req.params.id);
        return res.render('productDetail',{
            title: product.name,
            product
        });
    },
    carrito: (req,res) => {
        return res.render('productCart',{
            title: 'Tu carrito'
        });
    },
    pago: (req,res) => {
        return res.render('formaDePago',{
            title: 'Compras'
        });
    },
    compra: (req,res) => {
        return res.render('compra',{
            title: 'Finaliza tu compra'
        });
    },
}