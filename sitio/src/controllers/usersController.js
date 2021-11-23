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
        //db.User.findAll().then(users => res.send(users))
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
        db.User.findOne({
            where: {
                id: req.session.userLogin.id
            }
        })
            .then(user => {
                return res.render('users/profile',{
                    title : `Perfil de ${user.name} ${user.lastName}`,
                    user
                });
            })
            .catch(error => console.log(error));
    },
    profileEdit : (req,res) =>{
        db.User.findOne({
            where: {
                id: req.session.userLogin.id
            }
        })
            .then(user => {
                return res.render('users/profileEdit',{
                    title : `Editar perfil de ${user.name} ${user.lastName}`,
                    user
                });
            })
            .catch(error => console.log(error));
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
            if (oldPass && req.file) {
                if (fs.existsSync(path.join(__dirname,'../../public/images/users',req.session.userLogin.avatar))) {
                    fs.unlinkSync(path.join(__dirname,'../../public/images/users',req.session.userLogin.avatar))
                }
            }
            db.User.update(
                {
                    name: name && oldPass ? name.trim() : req.session.userLogin.name,
                    lastName: lastName && oldPass ? lastName.trim() : req.session.userLogin.lastName,
                    email: email && oldPass ? email.trim() : req.session.userLogin.email,
                    password: pass && oldPass ? bcrypt.hashSync(pass.trim(), 10) : bcrypt.hashSync(oldPass.trim(), 10),
                    //rolId: 2,
                    avatar: oldPass && req.file ? req.file.filename : req.session.userLogin.avatar.filename
                },
                {
                    where: {
                        id: req.session.userLogin.id
                    }
                }
            )
                .then(() => {
                    return res.redirect('/');
                })
                .catch(error => console.log(error));
        } else {
            db.User.findOne({
                where: {
                    id: req.session.userLogin.id
                }
            })
                .then(user => {
                    return res.render('users/profileEdit',{
                        title : "Perfil de Usuario",
                        errors : errors.mapped(),
                        user
                    });
                })
                .catch(error => console.log(error));
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