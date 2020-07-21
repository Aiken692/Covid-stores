//Require expressdependency to include express functionality.
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'))
})


module.exports = router;





//Routing for the home page.
// app.get('/home', (req, res) => {
//     res.sendFile("home.html", {root: view})
// })
