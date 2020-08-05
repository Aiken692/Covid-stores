//Require mongoose dependency to include mongoose functionality
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const signupSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});


signupSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', signupSchema);
