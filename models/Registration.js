//Require mongoose dependency to include mongoose functionality
const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")
const registrationSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: {
        type: String,
        unique: true,
        required: 'Please Enter user name'
    },
    role: {
        type: String,
        default: 'Agent',
        enum: ['Agent', 'Admin']
    },
    email: String,
    birthday: Date,
    gender: String,
    nationalid: String,
    phoneNumber: Number, 
});


registrationSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Registration', registrationSchema);