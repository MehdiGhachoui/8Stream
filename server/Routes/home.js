const router = require('express').Router();

router.get('/' , require('../Controllers/AlbumController').getAlbums); 

module.exports = router ; 