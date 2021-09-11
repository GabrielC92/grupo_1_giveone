module.exports = (req,res,next) => {
    if (req.cookies.giveoneLogin) {
        req.session.userLogin = req.cookies.giveoneLogin
    }
    next()
}