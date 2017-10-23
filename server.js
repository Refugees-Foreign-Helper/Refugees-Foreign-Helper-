var mysql= require('mysql');
var express= require('express');
var app= express();
var morgan=require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt=require('bcrypt');
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
// --------------------------Data base side----------------------------------------
// ---------------------create tables and connection--------------------------------
connect.connect(function () {

    var userTable = 'CREATE TABLE IF NOT EXISTS users( \
    id INT AUTO_INCREMENT PRIMARY KEY, \
    username varchar(255) NOT NULL UNIQUE,\
    password varchar(255),\
    Nationallity varchar(60),\
    Birthday DATE ,\
    Location varchar(60))';


    var roomTable = 'CREATE TABLE IF NOT EXISTS rooms(id INT AUTO_INCREMENT PRIMARY KEY,location varchar(60),discribtion varchar(255),contactInfo varchar(100),userID int,userName varchar(60),FOREIGN KEY (userID) REFERENCES users(id))';

    connect.query(userTable);
    connect.query(roomTable);
});


// -----------------Sign Up ----and ------Login------------------------------------



// ----------------------sign up----------------------------------------
app.post('/signup',function (req,res) {
    var password='';
    // console.log(req.body.username+'')
    var username= req.body.username;
    // var password=md5(req.body.password);
    bcrypt.hash(req.body.password,3,function (err,hash) {
    password=hash;
    })
    var Nationallity=req.body.Nationallity;
    var Birthday=req.body.Birthday;
    var location=req.body.location;

    var signup = 'SELECT * FROM users WHERE username=\''+username+'\'';

    
     
    connect.query(signup,function (err,checkeduser) {
        if(checkeduser.length<1){// user not exist

            var data = 'INSERT INTO users (username,password,Nationallity,Birthday,location) VALUES (\''+username+'\',\''+password+'\',\''+Nationallity+'\',\''+Birthday+'\',\''+location +'\')';

            connect.query(data);
            res.send(checkeduser);

        }else{


            res.send(checkeduser);

        }
    });
});

// ---------------------login-----------------------------------------

var user = ''; //store the current user in it 
app.post('/login',function(req,res){
    var username= req.body.username;
    var password1;
    var results;
    // console.log('hanan',user.username,user.id)
    var createSession = function(req, res, newUser) {
        return req.session.regenerate(function() {
           //newuser>>>> { id: 2, username: 'hananmajali', password: 'hananmajali' }
            user = newUser;
            req.session.user = newUser;
            console.log('user',user)
            res.send(newUser);
        });
    };

    
   // var password= md5(req.body.password);
    


    connect.query('SELECT password FROM users WHERE username=\''+username+'\'', function (err,result) {
        results=result[0].password;
        console.log('hahaha',results)
        compare()
    });

function compare() {

    bcrypt.compare(req.body.password,results,function (err,match) {   
        if(err){
            console.log(err)
        }
    if(match){
        console.log(true)
         createSession(req,res,results[0]);
    }else{
        console.log(false)
    }
    
    })

}
    // var login = 'SELECT * FROM users WHERE username=\''+username+'\'AND password=\''+password1+'\'';

    // connect.query(login,function(err,checkeduser){
        

        // if(checkeduser.length<1){//user not exists

        // }else{
           
            
        // }
    // });
    
});

//----------------create and save inside roomtable---------------
app.post('/post',function(req,res) {
    var username=user.username;
    var location = req.body.location;
    var discribtion = req.body.discribtion;
    var contactInfo = req.body.contactInfo;
   // console.log('username',user.username,user.id)
   
    var post = 'INSERT INTO rooms (location,discribtion,contactInfo,userID,userName) VALUES (\''+location+'\',\''+discribtion+'\',\''+contactInfo+'\',\''+user.id+'\',\''+user.username+'\')';

    connect.query(post);
    res.send(username);

});

//-----return all roomdata to the client side in the main page for all users-------

app.get('/main',function(req,res) {
    var rooms = 'SELECT * FROM rooms';
    connect.query(rooms,function (err,roomstable) {
        res.send(roomstable);
    });

});

//-----return all roomdata to the client side in the profile page for one user-------

app.get('/profile',function(req,res) {
    var userroom = 'SELECT * FROM rooms WHERE userName=\''+user.username+'\'';
    console.log(user.username)
    connect.query(userroom,function (err,info) {
        str = JSON.stringify(info)
        console.log('information for'+str)
        res.send(str);
    });

});

//----- how to delete in sql---------
// DELETE FROM table_name
// WHERE condition;


// -------------------------------------------------------------------------------
app.listen(port,function(){

});

