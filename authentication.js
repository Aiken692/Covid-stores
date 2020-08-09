const passport = require('passport');



//Authentication
module.exports = function isAuthenticate(req, res, next){
    if(req.isAuthenticated() && req.user.role == 'Admin'){
        return next();

    } else if(req.isAuthenticated() && req.user.role == 'Agent') {
        res.redirect('/login')
    }else{
        res.redirect('/login')
    }
}