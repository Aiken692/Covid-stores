const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    email: String,
    password: {
        type: String,
        required: 'Please enter the password'
    },
    birthday: Date,
    gender: String,
    nationalid: String,
    phoneNumber: Number, 
});

module.exports = mongoose.model('Registration', registrationSchema);