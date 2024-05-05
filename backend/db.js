const mongoose = require('mongoose');
const { type } = require('os');

mongoose.connect("mongodb+srv://arshhasan68:VnE6pFknwX3dBhDo@cluster0.amu8y8b.mongodb.net/");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance : {
        type : Number,
        required: true
    }

});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {User, Account};