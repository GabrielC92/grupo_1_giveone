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
    store: (req,res) => {
        let {name,price,category,description} = req.body
        let product ={
            id : (products[products.length -1].id + 1),
            name, 
            price : +price,
            category,
            description,
            image: req.file ? req.file.filename : 'default-image.png'

       }
       products.push(product)
       fs.writeFileSync(productFilePath,JSON.stringify(products,null,2),'utf-8');
       return res.redirect('/')
    },
    edit: (req,res) => {
        let product = products.find(product => product.id == +req.params.id);
        return res.render('admin/productEdit',{
            product
        });
    },
    update: (req, res) => {
        const {name, price, category, description, discount} = req.body;
        products.forEach(product =>{
            if(product.id === +req.params.id){
                product.id = +req.params.id;
                product.name = name;
                product.price = +price;
                product.category = category;
                product.description = description;
                
            }
        })
        fs.writeFileSync(productFilePath, JSON.stringify(products,null,2),'utf-8');
        return res.redirect('/producto/' + req.params.id)
    },
    destroy : (req, res) => {
        let productsDelete = products.filter(product => product.id !== +req.params.id);
        fs.writeFileSync(productFilePath, JSON.stringify(productsDelete,null,2),'utf-8');
        return res.redirect('/')	
        
        }
}