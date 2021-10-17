const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = {
    registro: (req,res) => {
        return res.render('users/register',{
            title: 'Crea tu cuenta'
        });
    },
    processRegistro: (req,res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const {name,lastName,email,pass} = req.body;
            db.User.create({
                name: name.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                password: bcrypt.hashSync(pass.trim(), 10),
                rolId: 2,
                avatar: req.file ? req.file.filename : 'avatar_default.png'
            })
                .then(user => {
                    req.session.userLogin = {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar,
                        rolId: user.rolId
                    }
                    return res.redirect('/');
                })
                .catch(error => console.log(error));
        } else {
            return res.render('users/register',{
                title: 'Crea tu cuenta',
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req,res) => {
        return res.render('users/login',{
            title: 'Inicia sesión',
        });
    },
    processLogin: (req,res) => {
        
         let errors = validationResult(req);

        if (errors.isEmpty()) {
            const {email,sesion} = req.body;

            db.User.findOne({
                where: {
                    email
                }
            })
                .then(user => {
                    req.session.userLogin = {
                        id : user.id,
                        name : user.name,
                        avatar : user.avatar,
                        rolId : user.rolId
                    }
                    if (sesion) {
                        res.cookie('giveoneLogin',req.session.userLogin,{maxAge : 1000 * 1200})
                    }
                    return res.redirect('/');
                })
                .catch(error => console.log(error));
        }else{
            return res.render('users/login',{
                errors: errors.mapped(),
                title: 'Inicia sesión',
                old: req.body
            });
        }
    },
    profile : (req,res) =>{
        return res.render('users/profile',{
            title : "Perfil de Usuario",
            user: usuarios.find(usuario => usuario.id == req.session.userLogin.id)
        });
    },
    profileUpdate: (req,res) => {
        let errors = validationResult(req);
        /* return res.send(errors) */

        if(req.fileValidationError){
            let image = {
                param: 'image',
                msg: req.fileValidationError
            }
            errors.push(image);
        }
        if (errors.isEmpty()) {
            const {name,lastName,email,pass,oldPass} = req.body;
            usuarios.forEach(usuario => {
            if (usuario.id === req.session.userLogin.id) {
                usuario.id = req.session.userLogin.id;
                usuario.name = name;
                usuario.lastName = lastName;
                usuario.email = email;
                usuario.pass = pass ? bcrypt.hashSync(pass.trim(), 10) : bcrypt.hashSync(oldPass.trim(), 10);
            }
        });
        fs.writeFileSync(usuariosPath, JSON.stringify(usuarios,null,2),'utf-8');
        return res.redirect('/');
        } else {
            return res.render('users/profile',{
                title : "Perfil de Usuario",
                errors : errors.mapped(),
                user: usuarios.find(usuario => usuario.id == req.session.userLogin.id)
            });
        }
    },
    logout : (req,res) =>{
        req.session.destroy();
        res.cookie('giveoneLogin',null,{maxAge: -1});
        res.redirect('/');
    },
    pass: (req,res) => {
        return res.render('users/forgot',{
            title: 'Restablecer contraseña'
        });
    },
    word: (req,res) => {
        return res.render('users/forgot2',{
            title: 'Nueva contraseña'
        });
    },
}