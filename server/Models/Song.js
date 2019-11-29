const mongoose = require('mongoose');

const SongSchema = mongoose.Schema({

    title      : { type : String , required : true }, 
    artist     : { type : mongoose.Schema.Types.ObjectId, ref : 'Artist' }, 
    genre      : { type : mongoose.Schema.Types.ObjectId, ref : 'Genre'  },
    path       : { type : String , required : true}, 
    duration   : { type : String , required : true },
    albumOrder : { type : Number , required : true },
    plays      : { type : Number , required : true }
});


const SongModel = mongoose.model("Song" , SongSchema , "songs");

module.exports = SongModel ; 