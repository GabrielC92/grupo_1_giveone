const fs = require('fs');
const path = require('path');
const usuariosPath = path.join(__dirname, '..', 'data', 'users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosPath,'utf-8'));

const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');


module.exports = {
    registro: (req,res) => {
        return res.render('register',{
            title: 'Crea tu cuenta'
        });
    },
    processRegistro: (req,res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const {name,lastName,email,pass} = req.body;
            let usuario = {
                id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                name: name.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                pass: bcrypt.hashSync(pass.trim(), 10),
                rol: 'user',
                avatar: req.file ? req.file.filename : 'avatar_default.png'
            }
            usuarios.push(usuario);
            fs.writeFileSync(usuariosPath,JSON.stringify(usuarios,null,2),'utf-8');

            req.session.userLogin = {
                id: usuario.id,
                name: usuario.name,
                avatar: usuario.avatar,
                rol: usuario.rol
            }
            return res.redirect('/');
        } else {
            return res.render('register',{
                title: 'Crea tu cuenta',
                errors: errors.mapped(),
                old: req.body
            })
        }
    },
    login: (req,res) => {
        return res.render('login',{
            title: 'Inicia sesión',
            
        });
    },

    processLogin: (req,res) => {
        
         let errors = validationResult(req);

        if (errors.isEmpty()) {

            let usuario = usuarios.find(usuario => usuario.email === req.body.email.trim())


            req.session.userLogin = {
                id : usuario.id,
                name : usuario.name,
                avatar: usuario.avatar,
                rol : usuario.rol
            }

            if (req.body.sesion) {
                res.cookie('giveoneLogin',req.session.userLogin,{maxAge : 1000 * 1200})
                
            }
            return res.redirect('/')
            }else{
            return res.render('login',{
                errors: errors.mapped(),
                title: 'Inicia sesión'
                
            });
        } 
    },
    profile : (req,res) =>{
        return res.render('profile',{
            title : "Perfil de Usuario",
              
        })
        

    },
    logout : (req,res) =>{
        req.session.destroy();
        res.cookie('giveoneLogin',null,{maxAge: -1})
        res.redirect('/')
        
    },
    pass: (req,res) => {
        return res.render('forgot',{
            title: 'Restablecer contraseña'
        });
    },
    word: (req,res) => {
        return res.render('forgot2',{
            title: 'Nueva contraseña'
        });
    },
}