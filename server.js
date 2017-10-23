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
    Birthday varchar(60) ,\
    Location varchar(60))';

// check it tomorrow??
    var commentTable = 'CREATE TABLE IF NOT EXISTS comments( \
    id INT AUTO_INCREMENT PRIMARY KEY, \
    comment varchar(255) ,\
    userID int ,\
    roomID int ,\
    FOREIGN KEY (userID) REFERENCES users(id) ,\
    FOREIGN KEY (roomID) REFERENCES rooms(id))';


   var roomTable = 'CREATE TABLE IF NOT EXISTS rooms(id INT AUTO_INCREMENT PRIMARY KEY,location varchar(60),discribtion varchar(255),contactInfo varchar(100),userID int,userName varchar(60),FOREIGN KEY (userID) REFERENCES users(id))';

   connect.query(userTable);
    connect.query(commentTable);
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
    var Nationallity=req.body.nationality;
    var Birthday=req.body.birthday;
    var location=req.body.location;
    console.log('b-day',Birthday)
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
var flag = false;
var user = ''; //store the current user in it 
app.post('/login',function(req,res){
    var username= req.body.username;
    var password1;
    var results;
     console.log('hanan',username,user.id)
    var createSession = function(req, res, newUser) {
        return req.session.regenerate(function() {
           //newuser>>>> { id: 2, username: 'hananmajali', password: 'hananmajali' }
            user = newUser;
            req.session.user = newUser;
            console.log('user123',newUser)
            res.send(newUser);
        });
    };

  // ------this password will encrypted with md5 library -------
   // some information about md5: md5 is A cryptographic hash function is a fully defined, deterministic function which uses no secret key.
   // It takes as input a message of arbitrary length (a stream of bits, any bits) and produces a fixed-size output. (since the function can accept many more distinct inputs than it can produce distinct outputs), but we require that it is unfeasible to find even one collision.

  // var password= md5(req.body.password);
   //------------------------------------------------------------ 


   connect.query('SELECT * FROM users WHERE username=\''+username+'\'', function (err,result) {
        results=result;
        compare()
    });

function compare() {

   bcrypt.compare(req.body.password,results[0].password,function (err,match) {  
        if(err){
            console.log(err)
        }
    if(match){
        console.log(true)
        flag = !flag;
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
           //createSession(req,res,checkeduser[0]);
            
       // }
    // });
    
});

app.get('/show',function(req,res){
    console.log('flag',flag)
    res.send(flag)
})

//----------------create and save inside roomtable---------------
app.post('/post',function(req,res) {
    var username=user.username;
    var location = req.body.location;
    var discribtion = req.body.discribtion;
    var contactInfo = req.body.contactInfo;
   // console.log('username',user.username,user.id)
   console.log('hhhhhhh',user.id,user.username)
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
   var userinfo= 'SELECT * FROM users WHERE userName=\''+user.username+'\'';
   var userinformation1;
   console.log(user.username)
   connect.query(userinfo,function(err,userinfomation){
       userinfomation1=userinfomation
       console.log(userinfomation1)
   })
   connect.query(userroom,function (err,info) {
       var total=[];
       var str = info

       total.push(str);
       total.push(userinfomation1)
       res.send(total);
   });

});
// -----------------delete room -----------------------------------------------
app.post('/deleteroom',function(req,res){
    var roomId=req.body.id // I will recieve it from client side

   var deleteroom= 'DELETE FROM rooms WHERE id=\''+roomId +'\'';
    connect.query(deleteroom);
})

// --------------post comment and send all the comment-------------------------
app.post('/postcomment',function(req,res){
    var userId= req.body.userid;
    var roomId= req.body.roomid;
    var Comment=req.body.commet;


   var Comment2='INSERT INTO comments (comment,userID,roomID) VALUES (\''+Comment+'\',\''+userId+'\',\''+roomId+'\')';

    connect.query(Comment2);
    var allcomments='SELECT * FROM comments WHERE roomID=\''+roomId+'\'';
    connect.query(allcomments,function(err,allcommentss){
        res.send(allcommentss)
    });
    

});






//----- how to delete in sql---------
// DELETE FROM table_name
// WHERE condition;



// -------------------------------------------------------------------------------
app.listen(port,function(){

});