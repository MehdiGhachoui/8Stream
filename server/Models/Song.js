const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({

    title      : { type : String  , require : true }, 
    artist     : { type : String  , required : true}, 
    duration   : { type : String  , required : true}, 
    path       : { type : String  , required : true},
});


const SongModel = mongoose.model("Song" , SongSchema , "songs");

module.exports = SongModel ; 