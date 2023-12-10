const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel