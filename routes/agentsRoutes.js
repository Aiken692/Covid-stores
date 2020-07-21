const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('agentlist')
})



router.post('/', (req,res) => {
    res.render(req.body)
})


module.exports = router;