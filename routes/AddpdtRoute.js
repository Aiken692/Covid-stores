const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const path = require('path');
const multer = require('multer');
const {extname} = require('path');


//Specify storage.
const storage = multer.diskStorage({
    destination: './public/img',
    filename: function(req, file, callback){
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})



// Init upload
const upload = multer({
    storage: storage,
    limit: {fileSize: 900000},
    filefilter:(req, file, callback) => {
        checkFileType(file, callback);
    }
})

// Check file type
function checkFileType(file, callback){
    // allowed extensions
    const filetypes = /jpeg|jpg|png/;
    // check extension
    const extname = filetypes.test(path.extname(file.originalname));


    // Check mimetype
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname){
        return callback(null, true);
    } else {
        callback('Error: images only');
    }
}


// Get display a product page.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'Addpdt.html'))
});

router.post('/', upload.single('image'),async (req, res) => {
    console.log(req.file)

    const product = new Product(req.body);
    product.productName  = req.body.productName;
    product.make = req.body.make;
    product.serialNo = req.body.serialNo;
    product.initial_pay = req.body.initial_pay;
    product.color = req.body.color;
    product.description = req.body.description;
    product.category = req.body.category;
    product.date = req.body.date;
    product.price = req.body.price;
    product.pay_interval = req.body.pay_interval
    product.stockNumber = req.body.stockNumber;
    product.image = req.file.path;

    try {
        await product.save()
        //console.log(req.body)
        res.redirect('/Addpdt/product')
        
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
        const walls = await Product.find();
        res.render('productlist', {products: walls})
    } catch (err) {
        res.status(400).send('unable to find items in the database')
    }
});

router.post("/delete", async (req, res) => {
    try {
      await Product.deleteOne({_id: req.body.id })
      res.redirect('back')
    } catch (error) {
       res.status(400).send("unable to delete to database");
    }
  })

module.exports = router;

