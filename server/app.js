const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const Keys = require('./Config/keys')
const auth = require('./Middelware/auth')
const  cors = require('cors')
const app = express() ; 


mongoose.connect(Keys.mongoURI );

let db = mongoose.connection;

db.on('open' , function(){
    
    console.log('database connected');

}).on('error', function(){
    
    console.log('database connection error');

})

// Serve Static Files:
app.use(express.static(path.join(__dirname, 'public/')))


// body-parser :
app.use(bodyParser.json({
    extended: false
}));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cors())

// Routes  : 
app.use('/auth' , require('./Routes/user'));
app.use('/home'  , auth  , require('./Routes/home')); 
app.use('/album' , auth  , require('./Routes/album')); 
app.use('/playlist'  , require('./Routes/playlist'))
app.use('/search' , auth , require('./Routes/search'))



// Server 
app.listen(4000 , function(req , res){
    console.log("running on port 4000...");
})