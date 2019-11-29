const jwt = require('jsonwebtoken');
const keys = require('../Config/keys');

module.exports = function(req , res , next){
    
    //check token : 
    let token = req.header('x-auth-token');
    
    // verify token : 
    if(!token) return res.json({msg : "access  denied"}); 

    try { 
        
        let decoded = jwt.verify(token , keys.jwtSecret);
        req.user = decoded.user; 
        console.log(req.user)
        next()

    } catch (error) {
        return res.status(402).json({msg : "token not valid"})
    }

}