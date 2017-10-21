var mysql= require('mysql');
var express= require('express');
var app= express();
var morgan=require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
// var path = require('path');
var port=process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname+'/front/dist/'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(morgan('dev'));
app.use(session({
    secret: 'shhh, it\'s a secret',
    resave:false,
    saveUninitialized: true
}));



var connect = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user:'sql12199746',
    password:'hbpfE6sY22',
    database:'sql12199746'
});

// ---------------------create table and connection--------------------------------
connect.connect(function () {

    var userTable = 'CREATE TABLE IF NOT EXISTS users( \
    id INT AUTO_INCREMENT PRIMARY KEY, \
    username varchar(255),password varchar(255))';


    var roomTable = 'CREATE TABLE IF NOT EXISTS rooms(id INT AUTO_INCREMENT PRIMARY KEY,location varchar(60),discribtion varchar(255),contactInfo varchar(100),userID int,FOREIGN KEY (userID) REFERENCES users(id))';

    connect.query(userTable);
    connect.query(roomTable);
});
// -----------------Sign Up ----and ------Login------------------------------------
// ----------------------sign up----------------------------------------

// app.get('/main',function(req,res){
//     res.end('hello ');

// });

app.post('/signup',function (req,res) {

    // console.log(req.body.username+'')
    var username= req.body.username;
    var password=req.body.password;


    var signup = 'SELECT * FROM users WHERE username=\''+username+'\'';

    
     
    connect.query(signup,function (err,checkeduser) {
        if(checkeduser.length<1){

            var data = 'INSERT INTO users (username,password) VALUES (\''+username+'\',\''+password+'\')';

            connect.query(data);
            res.send(checkeduser);

        }else{


            res.send(checkeduser);

        }
    });
});

// ---------------------login-----------------------------------------
var user = ""; //store the current user in it 
app.post('/login',function(req,res){

var createSession = function(req, res, newUser) {
    console.log('hanan',newUser.username)
    return req.session.regenerate(function() {
        user = newUser;
        
        req.session.user = newUser;
        res.send(newUser);
    });
};


    var username= req.body.username;
    var password= req.body.password;
    
    var login = 'SELECT * FROM users WHERE username=\''+username+'\'AND password=\''+password+'\'';

    connect.query(login,function(err,checkeduser){

        if(checkeduser.length<1){//user not exists

        }else{
            createSession(req,res,checkeduser[0])
            
        }
    });
    
});

//----------------creat save inside roomtable---------------
app.post('/post',function(req,res) {
    var username=user.username;
    var location = req.body.location;
    var discribtion = req.body.discribtion;
    var contactInfo = req.body.contactInfo;
   
	var post = 'INSERT INTO rooms (location,discribtion,contactInfo) VALUES (\''+location+'\',\''+discribtion+'\',\''+contactInfo+'\')';

	connect.query(post)

})

//---------return all roomdata to the client side---------

app.get('/main',function(req,res) {
    var rooms = 'SELECT * FROM rooms';
    connect.query(rooms,function (err,roomstable) {
        res.send(roomstable)
    });

});




// -------------------------------------------------------------------------------
app.listen(port,function(){

});

