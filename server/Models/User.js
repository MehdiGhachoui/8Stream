const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    userName  : { type : String , required: true }, 
    email     : { type : String , required: true },
    password  : { type : String , required: true },
    date      : { type :  Date  , default : Date.now }
});


const UserModel = mongoose.model("User" , UserSchema , "users");

module.exports = UserModel ; 