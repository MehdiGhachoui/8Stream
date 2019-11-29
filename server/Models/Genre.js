const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({

    type      : { type : String , required : true }, 
});


const GenreModel = mongoose.model("Genre" , GenreSchema , "genres");

module.exports = GenreModel ; 