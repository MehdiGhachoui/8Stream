const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({

    name      : { type : String , required : true }, 
});


const ArtistModel = mongoose.model("Artist" , ArtistSchema , "artists");

module.exports = ArtistModel ; 