module.exports = {
    login: (req,res) => {
        return res.render('login');
    },
    registro: (req,res) => {
        return res.render('register');
    },
    pass: (req,res) => {
        return res.render('forgot');
    },
    word: (req,res) => {
        return res.render('forgot2');
    },
}