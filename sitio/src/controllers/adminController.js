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
        db.Category.findAll({
            order : [
                ['name','ASC']
            ]
        })
            .then(categorias => res.render('admin/productCreate',{
                categorias,
            }))
            .catch(error => console.log(error))
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

        },
        {include : ['category','images']}
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

                db.Image.bulkCreate(images,{validate : true})
                .then(() => console.log('Imagenes guardadas'))
            }
            return res.redirect('/admin/products')	
        })
        .catch(error => console.log(error))

        } else {
            
                 if (req.files[0]) {
                    req.files.forEach(imagen => {
                        if(fs.existsSync('../../public/images/products'+ imagen.file)){
                            fs.unlinkSync('../../public/images/products' + imagen.file)
                        }
                    })
         }
        
         db.Category.findAll({
            order : [
                ['name','ASC']
            ]
        })
            .then(categorias => res.render('admin/productCreate',{
                categorias,
                errors: errors.mapped(),
                old: req.body
            }))
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
            name: name.trim(), 
            price,
            categoryId,
            description : description.trim(),
            },
            {
              where : {
                  id: req.params.id
              }  
            }
            )
            .then(() => {
                return res.redirect('/admin/products')
            })
            .catch(error => console.log(error))
        
    }else{
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
                product,
                errors : errors.mapped()
        })
        
        })
        .catch(error => console.log(error))
    }
    },
    destroy : (req, res) => {
        db.Product.findByPk(req.params.id,{
            include : ['images']
        })
        .then(products =>{
            products.images.forEach(imagen => {
                if(fs.existsSync(path.join(__dirname,'../../public/images/products',imagen.file))){
                    fs.unlinkSync(path.join(__dirname,'../../public/images/products',imagen.file))
                }
            });
        

       db.Product.destroy({
                where : {
                    id: req.params.id
                }
            }
       )
       .then(() =>{
        return res.redirect('/admin/products')	
       })
    })
       .catch(error => console.log(error))
    }
        
}
