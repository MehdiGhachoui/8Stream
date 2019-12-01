const proxy = require('../Middelware/proxy');
const auth = require('../Middelware/auth');
const router = require('express').Router();


router.get('/' , auth ,proxy , require('../Controllers/UserController').getUser)
router.post('/register' ,proxy , require('../Controllers/UserController').regesterUser ); 
router.post('/login' , proxy , require('../Controllers/UserController').loginUser );

module.exports = router ; 