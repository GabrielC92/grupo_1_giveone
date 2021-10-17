const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const queryInterface = db.sequelize.getQueryInterface();

module.exports = {
    data: (req,res) => {
        db.Category.findAll(
            {
                order: [
                    ['name','ASC']
                ]
            }
        )
        .then(categorias => res.render('admin/products',{
           categorias
        }))
        .catch(error => console.log(error))
    },
    create: (req,res) => {
        return res.render('admin/productCreate',{
            title: 'Crear nuevo producto'
        })
    },
    store: (req,res) => {
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
       
     
       
    },
    edit: (req,res) => {
        let product = products.find(product => product.id == +req.params.id);
        return res.render('admin/productEdit',{
            title: `Editar ${product.name}`,
            product
        });
    },
    update: (req, res) => {
        const {name, price, category, description} = req.body;
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
        return res.redirect('/admin/products')
    },
    destroy : (req, res) => {
        let productsDelete = products.filter(product => product.id !== +req.params.id);
        fs.writeFileSync(productFilePath, JSON.stringify(productsDelete,null,2),'utf-8');
        return res.redirect('/admin/products')	
        
        }
}
