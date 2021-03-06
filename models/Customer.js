const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    fullname: String,
    location: String,
    phoneNumber: Number,
    email: String,
    initialPay: Number,
    nationalid: String,
    gender: String,
    itemName: String,
    serialNumber: Number,
    dateP: Date,
    dateN: Date,
    amountPayable: Number,
    refereeNumber: Number,
    purchaseReceipt: Number
    
});

module.exports = mongoose.model('Customer', customerSchema)

