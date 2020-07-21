// Require express dependdency to include express functionality.
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'))
});

router.post('/register', (req, res) => {
    res.sendFile(__dirname, '../views', 'register.html')
})



module.exports = router;

