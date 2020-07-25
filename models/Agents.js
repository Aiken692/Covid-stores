//Require mongoose dependency to include mongoose functionality
const mongoose = require("mongoose");
const nameSchema = new mongoose.Schema({

    fname: String,
    lname: String,
    username: String,
    email: String,
    password: String,
    birthday: Date,
    gender: String,
    nationalid: String,
    phoneNumber: Number,
})

const Agents = module.exports = mongoose.model("Agents", nameSchema);

