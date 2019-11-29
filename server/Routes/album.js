const router = require('express').Router();

router.get('/:id' , require('../Controllers/AlbumController').albumInfo); 
router.get('/:name' , require('../Controllers/AlbumController').searchForAlbums); 

module.exports = router ; 