const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://arshhasan68:VnE6pFknwX3dBhDo@cluster0.amu8y8b.mongodb.net/");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;