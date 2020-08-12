// Require express dependdency to include express functionality.
const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration')


const path = require('path');
const passport = require('passport');


// Get display a register page.
router.get('/', ensureAuthenticated,(req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'))
});


router.post('/',  async (req, res) => {
    if(req.session.user){
        try {
            console.log(req.body)
            const items = new Registration(req.body);
            await Registration.register(items, req.body.password, (err) => {
                if (err) {
                    throw err
                }
                res.redirect('/register/agent')
            })
        } catch (err) {
            res.status(400).send('Sorry! Something went wrong')
            console.log(err)
        }

    }
})

function ensureAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/signin/adminpanel')
    }
}

  

/*Creating a get route which picks data from the database of the registered agents and displays them using the 
agentlist.pug file othrwise an error message unable to find in the data base
would be displayed on the browser.*/
router.get('/agent', ensureAuthenticated, async (req, res) => {
    try {
        let items = await Registration.find();
        res.render('agentlist', {agents: items})
    } catch (err) {
        res.status(400).send('unable to find items in the database');
    }
   
});







router.post("/delete", async (req, res) => {
    try {
      await Registration.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })



module.exports = router;

