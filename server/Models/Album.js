const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema({

    title      : { type : String , required : true }, 
    artist     : { type : mongoose.Schema.Types.ObjectId, ref : 'Artist' }, 
    song      : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Song' }],
    artwork    : { type : String , required : true}, 

});


const AlbumModel = mongoose.model("Album" , AlbumSchema , "albums");

module.exports = AlbumModel ; 