const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Keys = require('./Config/keys')
const auth = require('./Middelware/auth')
const app = express() ; 


mongoose.connect(Keys.mongoURI );

let db = mongoose.connection;

db.on('open' , function(){
    
    console.log('database connected');

}).on('error', function(){
    
    console.log('database connection error');

})

// body-parser :
app.use(bodyParser.json({
    extended: false
}));
app.use(bodyParser.urlencoded({
	extended: false
}));


// Routes  : 
app.use('/auth' , require('./Routes/user'));
app.use('/home'  , auth  , require('./Routes/home')); 
app.use('/album' , auth  , require('./Routes/album')); 
// app.use('/user'  , auth  , require('./Routes/user'));


// Server 
app.listen(3000 , function(req , res){
    console.log("running on port 3000...");
})