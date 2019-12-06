const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({

    title      : { type : String , required : true }, 
    artist     : { type : mongoose.Schema.Types.ObjectId, ref : 'Artist' }, 
    duration   : { type : String , required : true}, 
    path       : { type : String , required : true },
});


const SongModel = mongoose.model("Song" , SongSchema , "songs");

module.exports = SongModel ; 