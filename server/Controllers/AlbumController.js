const Album = require('../Models/Album');
const Song   = require('../Models/Song')


module.exports.getAlbums = async  function(req , res) {


    Album.find({} , function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json(data);
        
    }).populate({path :'song'   , select  : ' ', model: Song } )

}

module.exports.albumInfo = function(req , res){

    Album.findById(req.params.id , function(err , data){
        
        if (err) return res.status(400).json({errors : err});
        else return res.status(200).json(data);

    }).populate({path :'song'   , select  : ' ', model: Song } )

}


module.exports.searchForAlbums = function(req , res){

    
    Album.findOne({title :req.params.name }, function(err , data){
        
        if (err) return res.status(500).json({errors : err});

        if(!data) return res.status(400).json({errors : "search input is invalid"});

        else return res.status(200).json(data);

    });

}