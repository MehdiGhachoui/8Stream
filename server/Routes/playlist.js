const router = require('express').Router();

router.post('/' , require('../Controllers/PlaylistController').createPlaylist); 
router.get('/all/:id' , require('../Controllers/PlaylistController').getPlaylists); 
router.get('/:id' , require('../Controllers/PlaylistController').playlistInfo); 
router.put('/' , require('../Controllers/PlaylistController').addToPlaylist); 
router.delete('/:id' , require('../Controllers/PlaylistController').removePlaylist); 

module.exports = router ; 