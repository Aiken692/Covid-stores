// Require express dependdency to include express functionality.
const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration')


const path = require('path');


// Get display a register page.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'))
});

router.post('/', async (req, res) => {
    const registration = new Registration(req.body);
    
    try {
        await registration.save()
        console.log(req.body)
        res.redirect('/register/agent') 
        res.send('Thank you for submitting');
    } catch (err) {
        res.send('Sorry! Something went wrong');
        console.log(err)
    }
    
});

/*Creating a get route which picks data from the database of the registered agents and displays them using the 
agentlist.pug file othrwise an error message unable to find in the data base
would be displayed on the browser.*/
router.get('/agent', async (req, res) => {
    try {
        const items = await Registration.find();
        res.render('agentlist', {agents: items});
    } catch (err) {
        res.status(400).send('unable to find items in the database')
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

