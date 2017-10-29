var mysql= require('mysql');
var express= require('express');
var app= express();
var morgan=require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt=require('bcrypt');
var setCookie = require('set-cookie');
var CookieParser = require('restify-cookies');

// var path = require('path');
var port=process.env.PORT || 3000;

app.use(CookieParser.parse);
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
    imag longtext,\
    Location varchar(60))';

// check it tomorrow??
    var commentTable = 'CREATE TABLE IF NOT EXISTS comments( \
    id INT AUTO_INCREMENT PRIMARY KEY, \
    comment varchar(255) ,\
    username varchar(255) ,\
    roomID int ,\
    FOREIGN KEY (roomID) REFERENCES rooms(id))';

// FOREIGN KEY (usernmae) REFERENCES users(id) ,\

   var roomTable = 'CREATE TABLE IF NOT EXISTS rooms(id INT AUTO_INCREMENT PRIMARY KEY,location varchar(60),image longtext,discribtion varchar(255),contactInfo varchar(100),userID int,userName varchar(60),FOREIGN KEY (userID) REFERENCES users(id))';

   connect.query(userTable);
    connect.query(commentTable);
    connect.query(roomTable);
});


// -----------------Sign Up ----and ------Login------------------------------------




// ----------------------sign up----------------------------------------
app.post('/signup',function (req,res) {
    var password='';
    var username= req.body.username;
    var Image=req.body.image;
    bcrypt.hash(req.body.password,3,function (err,hash) {
    password=hash;
    })
    var Nationallity=req.body.nationality;
    var Birthday=req.body.birthday;
    var location=req.body.location;
    var signup = 'SELECT * FROM users WHERE username=\''+username+'\'';

   
   
    connect.query(signup,function (err,checkeduser) {
        if(checkeduser.length<1){// user not exist

           var data = 'INSERT INTO users (username,password,Nationallity,Birthday,location,imag) VALUES (\''+username+'\',\''+password+'\',\''+Nationallity+'\',\''+Birthday+'\',\''+location +'\',\''+Image+'\')';

           connect.query(data);
            res.send(checkeduser);

       }else{


           res.send(checkeduser);

       }
    });
});

// ---------------------login-----------------------------------------
var users=[];
var flag = false;
var x;
app.post('/login',function(req,res){

    var username= req.body.username;
    var password1;
    var results;
    var cookies = req.cookies;
    var createSession = function(req, res, newUser) {
        return req.session.regenerate(function() {
           //newuser>>>> { id: 2, username: 'hananmajali', password: 'hananmajali' }
           

           bcrypt.hash(req.body.password,3,function (err,hash) {
            console.log(hash)
             x={'infog':['u',username,'p',hash]}

              })
            req.session.user = newUser;
            users.push(req.session.user.username)
            console.log('after login   ',req.session.user.username)
            res.send('true');
        });
    };


   connect.query('SELECT * FROM users WHERE username=\''+username+'\'', function (err,result) {
        results=result;
        if(result[0]!==undefined){
          compare();  
        }else{
            console.log('not found')
        }
        
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

//--------------------logout-----------------------------------
//Logout function destroys the open session.
app.get('/logout',function (req,res) {
    users.splice(users.indexOf(req.session.user.username),1)
    flag = !flag
    req.session.destroy();
    res.clearCookie('info');
    res.end();
});

app.get('/show',function(req,res){
  // console.log(flag)
  // console.log(users)
    res.send(flag)
})

//----------------create and save inside roomtable---------------
app.post('/post',function(req,res) {
            console.log('in post    ',req.session.user.username)


    var location = req.body.location;
    var discribtion = req.body.discribtion;
    var contactInfo = req.body.contactInfo;
    var Image = req.body.image
    var post = 'INSERT INTO rooms (location,discribtion,contactInfo,userID,userName,image) VALUES (\''+location+'\',\''+discribtion+'\',\''+contactInfo+'\',\''+req.session.user.id+'\',\''+req.session.user.username+'\',\''+Image+'\')';

   connect.query(post);
    res.send(req.session.user.username);

});

//-----return all roomdata to the client side in the main page for all users-------

app.get('/main',function(req,res) {
            console.log('in main    ',req.session.user.username)

    var rooms = 'SELECT rooms.id,rooms.location,rooms.image,rooms.discribtion,rooms.contactInfo,rooms.userName,users.imag FROM rooms,users';
    connect.query(rooms,function (err,allposts) {
        res.send(allposts);
    });

});

//-----return all roomdata to the client side in the profile page for one user-------

app.get('/profile',function(req,res) {
            console.log('in profile    ',req.session.user.username)

    console.log('hanan test',req.body.length)
   var userroom = 'SELECT * FROM rooms WHERE userName=\''+req.session.user.username+'\'';
   var userinfo= 'SELECT * FROM users WHERE userName=\''+req.session.user.username+'\'';
   var userinformation1;

   connect.query(userinfo,function(err,userinfomation){
       userinfomation1=userinfomation

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
            console.log('in postcomment    ',req.session.user.username)


    var roomId= req.body.roomid;
    var Comment=req.body.commet;



   var Comment2='INSERT INTO comments (comment,username,roomID) VALUES (\''+Comment+'\',\''+req.session.user.username+'\',\''+roomId+'\')';

    connect.query(Comment2);
    var allcomments='SELECT comments.username,comments.comment,users.imag FROM comments INNER JOIN users ON comments.username=users.username AND comments.roomID=\''+roomId+'\'';
    connect.query(allcomments,function(err,allcommentss){
        res.send(allcommentss)
    });
    

});



// -------------------------------------------------------------------------------
app.listen(port,function(){

});