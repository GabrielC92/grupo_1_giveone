module.exports = {
    add : (req,res) => {
        return res.render()
    },

    store : (req,res) =>{
        return res.send(req.body)
    },

    detail : (req,res) => {
        return res.render('productDetail')
    },

    edit : (req,res) => {
        return res.render()
    },

    update : (req,res) =>{
        return res.send(req.body)
    },
    
    destroy : (req,res) => {
        return res.send('Eliminar')
    }


}
