const express = require('express');
const router = express.Router();
const User = require('../models/Signup');
const passport = require('passport');
const path = require('path');

// Get the signup page.
// Admin details.
// Sign up.
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../views', 'signup.html'));
});

/*Creating a post router to register and save admin details in the database then redirect to the 
login form otherwise return an error message "Sorry! Something went wrong*/
router.post("/", async (req, res) => {
    try {
      const items = new User(req.body);
      await User.register(items, req.body.password, (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/signup/signin");
      });
    } catch (err) {
      res.status(400).send("Sorry! Something went wrong.");
      console.log(err);
  };
});


// router.get("/signin", (req, res) => {
//   res.sendFile(path.join(__dirname, '../views', 'sign.html'));
// });


   
// router.post('/signin', passport.authenticate('user-local'), (req, res) => {
//   req.session.user = req.user;
//   console.log(req.body);
//   console.log(req.user)
//   res.redirect('/signin/adminpanel');
// });



  module.exports = router;

  




