const router = require('express').Router();

router.post('/register' , require('../Controllers/UserController').regesterUser ); 
router.post('/login' , require('../Controllers/UserController').loginUser );

module.exports = router ; 