//Require expresss dependency to include express functionality.
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'));
});


router.post('/', (req, res) => {
    // res.sendFile(__dirname, '../views', 'login.html')
    res.json(req.body)
})



module.exports = router;