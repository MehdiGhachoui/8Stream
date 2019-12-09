const mongoose = require('mongoose');

const PlaylistSchema = mongoose.Schema({

    name      : { type : String , required : true }, 
    song      : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Song' }],
    userID    : { type : mongoose.Schema.Types.ObjectId, ref : 'User' },
    date      : { type :  Date  , default : Date.now }
    

});


const PlaylistModel = mongoose.model("Playlist" , PlaylistSchema , "playlists");

module.exports = PlaylistModel ; 