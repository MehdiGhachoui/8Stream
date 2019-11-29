const Album = require('../Models/Album');
const Artist = require('../Models/Artist');
const Song   = require('../Models/Song')


module.exports.getAlbums = async  function(req , res) {


    Album.find({} , function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json(data);
        
    }).populate({path :'artist' , select  : 'name  -_id', model: Artist })
      .populate({path :'song'   , select  : 'title -_id', model: Song } )

}

module.exports.albumInfo = function(req , res){

    Album.findById(req.params.id , function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json(data);

    });

}


module.exports.searchForAlbums = function(req , res){

    Album.find({title : req.params.title}, function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json(data);

    });

}