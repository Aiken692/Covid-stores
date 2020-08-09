const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'signin.html'));
  }); 
  
  
     
  router.post('/', passport.authenticate('user-local'), (req, res) => {
    req.session.user = req.user;
    console.log(req.body);
    console.log(req.user)
    res.redirect('/signin/adminpanel');
  });

  // getting the Admin panel
router.get('/adminpanel', (req, res) => {
    if(req.session.user){
        res.sendFile(path.join(__dirname, '../views', 'Adminpanel.html'))
    } else{
        res.redirect('/signin')
    }
});




//logout
router.get('/signout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('../signin');
            }
        })
    }  
  })
  
  
  
    module.exports = router;
  