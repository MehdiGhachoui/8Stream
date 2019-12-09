const Playlist = require('../Models/Playlist');
const  Song    = require('../Models/Song')
const User     = require('../Models/User');


module.exports.createPlaylist = async function(req , res) {

    let {alert ,  userID } = req.body


    Playlist.findOne({name : alert , userID : userID} , function(err , data){

        if(err) return res.status(500).json({errors : err})

        if(data) return res.status(400).json({msg : 'playlist already exist'})

        else {

            newPlaylist = new Playlist({name : alert  , userID : userID})

            newPlaylist.save(function(err){

                if (err) return res.status(500).json({errors : err})

                else return res.status(200).json({msg : 'playlist has been added'})
            })

        }


    })
            

}


module.exports.getPlaylists = function(req , res){

    Playlist.find( {userID : req.params.id } , function(err , data){
        
        if (err) return res.status(500).json({errors : err});
        else return res.status(200).json(data);

    }).populate({path :'userID'   , select  : ' -password ', model: User } )

}

module.exports.playlistInfo = function(req , res){

    Playlist.findById(req.params.id , function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json(data);

    }).populate({path :'song'  , select  : ' ', model: Song } )

}

module.exports.removePlaylist = function(req , res){

    Playlist.remove({_id : req.params.id}, function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json({msg : 'playlist has been removed'});

    })

}


module.exports.addToPlaylist =  function(req , res) {

    let {songID ,  userID , playlistID } = req.body


    Playlist.findOne({_id : playlistID , userID : userID} , function(err , data){

        if(err) return res.status(500).json({errors : err})

        

        else {

            
            data.song.push(songID)
            data.save(function(err){

                if (err) return res.status(500).json({errors : err})

                else return res.status(200).json({msg : 'Song has been added'})
            })

        }


    })
            

}


