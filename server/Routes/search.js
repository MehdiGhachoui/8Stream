const router = require('express').Router();

router.get('/:name' , require('../Controllers/AlbumController').searchForAlbums); 

module.exports = router ; 