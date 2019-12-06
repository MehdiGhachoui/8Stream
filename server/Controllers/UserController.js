const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../Config/keys');



module.exports.getUser =  function(req , res){

    console.log(req.user.id)
    User.findById(req.user.id , function(err , user){

        if(err) return res.status(500).json({msg : "Server error"});
        else  res.status(200).json(user);
        
    }).select('-password');
    
}


module.exports.regesterUser = function(req , res){

    

    // CHECKING SUBMITED DATA 
    
    const { userName , email, password, password2 } = req.body;
    let errors = [];
  
    if (!userName || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
        return res.json(errors.msg);
    }

   
    else{

        let {userName ,  email ,  password} = req.body ;

        // CHECKING IF THE USER EXIST
        User.findOne({email: email} , function(err , user){

            if(err) return res.status(500).json({msg : "Server error"})

            if(user){ 
                console.log("error :" , user) 
                return res.status(401).json({msg : "user already exist"})
                
            }
            else{

                // Create a User
                user = new User({
                    userName , 
                    email , 
                    password 
                    
                });


                // HACHING THE PASSWORD
                bcrypt.genSalt(10 , function(err , salt){

                    bcrypt.hash(user.password , salt , function(err , hash){
                        
                        if(err) console.log(err.message)
                        else{

                            user.password = hash 
                            user.save(function(err){
                
                                if(err) return res.status(400).json({error: err});
                                else {
                                    
                                    // CREATING THE WEBTOKEN 
                                    let payload = { user : { id : user.id } }
                                    jwt.sign(payload , keys.jwtSecret , {expiresIn : 3600000} , function(err , token){
                    
                                        if(err) return res.status(400).json({msg : 'token error'})
                                        else return res.json({token})

                                    })
                                }
                    
                            })
                        }
                    })
                })
            }

        }) 

    }

}

module.exports.loginUser = function(req , res){

    // CHECKING THE SUBMITED DATA :
    const { email, password } = req.body;
    let errors = [];
  
    if ( !email || !password ) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (errors.length > 0) {
        return res.json(errors.msg);
    }


    else{

        

        
        // CHECKING IF THE USER EXIST :
        User.findOne({email: email} , function(err , user){

            if(err) return res.status(401).json({msg : "something went wrong"});

            if(!user){ 
                
                console.log(user) 
                return res.status(401).json({msg : "email is invalid"})
            }

            else{

               // CREATING THE WEBTOKEN :
                console.log(user) 
                let payload = { user : { id : user.id } }
                jwt.sign(payload , keys.jwtSecret , {expiresIn : 3600} , function(err , token){
                    
                    if(err) return res.status(400).json({msg : 'token error'})
                    else return res.json({token})

                })
                    
            }
                

        
        }) 

    }

}
