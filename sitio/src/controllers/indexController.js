const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    home: (req,res) => {
        db.Product.findAll({
            include:[
                {
                    association: 'category'
                },
                {
                    association: 'images'
                }
            ]
        })
            .then(products => {
                return res.render('index',{
                    title: 'Home',
                    products
                });
            })
            .catch(error => console.log(error));
    },
    search: (req,res) => {
        db.Product.findAll({
            include:[
                {
                    association: 'category'
                },
                {
                    association: 'images'
                }
            ],
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.substring]: req.query.search
                        }
                    }
                ]
            }
        })
            .then(products => {
                return res.render('result',{
                    title: 'Resultado de la búsqueda',
                    products,
                    search: req.query.search
                });
            })
            .catch(error => console.log(error));
    },
    detalle: (req,res) => {
        db.Product.findByPk(req.params.id,{
            include : ['category', 'images']
        })
        .then(product => {
            return res.render('productDetail',{
                title: product.name,
                product
        })
        
        })
        .catch(error => console.log(error));
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