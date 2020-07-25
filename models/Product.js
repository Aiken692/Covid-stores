const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productName: String,
    make: String,
    serialNo: String,
    initial_pay: Number,
    color: String,
    description: String,
    category: String,
    date: Date,
    price: Number,
    pay_interval: Number,
    stockNumber: Number,
    image: String


});


module.exports = mongoose.model('Product',productSchema);