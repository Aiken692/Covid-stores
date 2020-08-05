//Require expresss dependency to include express functionality.
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const passport = require('passport');
const path = require('path');


// this defines my login route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});

   
router.post('/', passport.authenticate('local'), (req, res) => {
    req.session.user = req.user;
    console.log(req.body);
    console.log(req.user)
    res.redirect('/login/customer');
});

//Create a get router with a '/customer' path to display the customer.html file in a browser
router.get('/customer', (req, res) => {
    if(req.session.user){
        res.sendFile(path.join(__dirname, '../views', 'customer.html'))
    } 
    else{
        console.log("cant find session");
        res.redirect("/login")
    }  
});

/*Creating a post route which captures customer details from the customer registration form
and saves it to the database the redirects the user to the customerlist(a route which displays the 
list.pug file)*/
router.post('/customer', async (req,res) => {
    try {
        const myData = new Customer(req.body);
        await myData.save()
            .then(item => {
                res.redirect('/customerlist')
            })
    } catch (error) {
        res.status(400).send("unable to save to database");
    }
});






// getting the Admin panel
router.get('/adminpanel', (req, res) => {
    if(req.session.user){
        res.sendFile(path.join(__dirname, '../views', 'Adminpanel.html'))
    }
});


// //Logout
// router.get('/logout', (req, res)=>{
//     req.logout();
//     res.redirect('/login');
// });


//logout
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('../login');
            }
        })
    }  
  })






module.exports = router;