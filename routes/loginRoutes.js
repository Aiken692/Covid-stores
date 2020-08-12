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
        console.log(req.body)
        const items = new Customer(req.body);
        await items.save()
        res.redirect('/login/list')
    } catch (err) {
        res.send('Sorry! Something went wrong');
        console.log(err)
    }
});


/*Creating a get route which picks data from the database of the registered customers and displays them using the 
customerlist.pug file othrwise an error message unable to find in the data base
would be displayed on the browser.*/
 router.get('/list', async (req, res) => {
    try {
        let items = await Customer.find();
        res.render('customerlist', {customers: items})
    } catch (err) {
        res.status(400).send('unable to find items in the database');
    }
   
}); 




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


  // For the delete.
router.post("/delete", async (req, res) => {
    try {
      await Customer.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })


module.exports = router;