const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const {validationResult} = require('express-validator');

const queryInterface = db.sequelize.getQueryInterface();

module.exports = {
    data: (req,res) => {
        db.Product.findAll({
            include : ['category','images']
        })
        
        .then(products => {
           
            return res.render('admin/products',{
                title: 'Listado de productos',
                products
        }) 
        
        })
        .catch(error => console.log(error))
    },
    create: (req,res) => {
        return res.render('admin/productCreate',{
            title: 'Crear Producto',
            
        })
    },
    store: (req,res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
        let {name,price,categoryId,description} = req.body

        db.Product.create({

            name: name.trim(), 
            price,
            categoryId,
            description : description.trim(),

        }
    )
        .then(product => {
            if (req.files.length != 0) {
                let images = req.files.map(image =>{
                   let item = {
                        file : image.filename,
                        productId : product.id
                    }
                    return item
                }) // Termina el map

                db.Image.create(images,{validate : true})
                .then(() => console.log('Imagenes guardadas'))
            }
            return res.redirect('/')
        })
        .catch(error => console.log(error))

        } 
     
       
    },
    edit: (req,res) => {
        let categories = db.Category.findAll(
            {
                order: [
                    ['name']
                ]
            }
        )
        let product = db.Product.findByPk(req.params.id, {
            include : ['category','images']
        })
        Promise.all(([categories, product]))
        .then(([categories, product]) => {
            return res.render('admin/productEdit',{
               categories,
                product
        })
        
        })
        .catch(error => console.log(error))
    },
    update: (req, res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){

        let {name,price,categoryId,description} = req.body
        db.Product.update(
            {

            },
            {
                
            }
            )
        return res.redirect('/admin/products')
    }
    },
    destroy : (req, res) => {
        let productsDelete = products.filter(product => product.id !== +req.params.id);
        fs.writeFileSync(productFilePath, JSON.stringify(productsDelete,null,2),'utf-8');
        return res.redirect('/admin/products')	
        
        }
}
