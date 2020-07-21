const mongoose = require('mongoose');
const managerschema = mongoose.Schema({
    email: {
        type:String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 8,
    }
});

const Manager = mongoose.model('Manager', managerschema);

module.exports = Manager;