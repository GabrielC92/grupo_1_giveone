module.exports = {
    login: (req,res) => {
        return res.render('login',{
            title: 'Inicia sesión'
        });
    },
    registro: (req,res) => {
        return res.render('register',{
            title: 'Crea tu cuenta'
        });
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