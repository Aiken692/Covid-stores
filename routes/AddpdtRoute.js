const express = require('express');
const router = express.Router();
const Product = require('../models/Product')


const path = require('path');


// Get display a product page.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'Addpdt.html'))
});

router.post('/', async (req, res) => {
    const product = new Product(req.body);

    try {
        await product.save()
        //console.log(req.body)
        res.redirect('/Addpdt/Addpdt/product')
        
    } catch (err) {
        res.send('Sorry! Something went wrong');
        console.log(err)
    }
});


/*Creating a get route which picks data from the database of the registered agents and displays them using the 
agentlist.pug file othrwise an error message unable to find in the data base
would be displayed on the browser.*/

router.get('/product', async (req, res) => {
    try {
        const items = await Product.find();
        res.render('productlist', {products: items})
    } catch (err) {
        res.status(400).send('unable to find items in the database')
    }
});



module.exports = router;

