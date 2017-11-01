var mysql= require('mysql');
var express= require('express');
var app= express();
var morgan=require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt=require('bcrypt');
var setCookie = require('set-cookie');
var CookieParser = require('restify-cookies');
var translate = require('google-translate-api');

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
    user:'sql12202148',
    password:'luJSkvai4e',
    database:'sql12202148'
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
    status varchar(255) ,\
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
var flag='false';
var x;
app.post('/login',function(req,res){

    var results;

   connect.query('SELECT * FROM users WHERE username=\''+req.body.username+'\'', function (err,result) {
        // console.log('hhhh',result)
        if(result[0]!==undefined){
          results=result;
          compare();  
        }else{
          flag=false;
          res.send(flag)
            
        }
        
    });

function compare() {

   bcrypt.compare(req.body.password,results[0].password,function (err,match) {  
        if(err){
            console.log(err)
        }
    if(match){
      console.log('this user is correct')
        flag = 'true';
        console.log('flag now is  true')
         createSession(req,res,results[0]);

    }else{
      console.log('this user is very bad')
      console.log('flag now is  false in else')

        flag='false';
        res.send(flag)
    }
    
   })

}

        var createSession = function(req, responce, newUser) {
        return req.session.regenerate(function() {
           //newuser>>>> { id: 2, username: 'hananmajali', password: 'hananmajali' }
           

           bcrypt.hash(req.body.password,3,function (err,hash) {
            console.log(hash)
             // x={'infog':['u',username,'p',hash]}

              })
            req.session.user = newUser;
            users.push(req.session.user.username)
            // console.log('after login   ',req.session.user.username)
            // console.log('true from server')
            // console.log('flag is ',flag);
            //     console.log('hhhhh',flag)
        res.send(flag)
                

        });

    };
});

//--------------------logout-----------------------------------
//Logout function destroys the open session.
app.get('/logout',function (req,res) {
    users.splice(users.indexOf(req.session.user.username),1)
    flag = 'false';
    req.session.destroy();
    res.clearCookie('info');
    res.send(flag);
});

app.get('/show',function(req,res){
    res.send(flag)
})

//----------------create and save inside roomtable---------------
app.post('/post',function(req,res) {
            console.log('in post    ',req.session.user.username,req.session.user.id)


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
    var rooms = 'SELECT rooms.id,rooms.location,rooms.image,rooms.discribtion,rooms.contactInfo,rooms.userName,users.imag FROM users INNER JOIN rooms ON rooms.userID = users.id';
    connect.query(rooms,function (err,result) {
    res.send(result)
          
    })

});

//-----return all roomdata to the client side in the profile page for one user-------

app.get('/profile',function(req,res) {

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

//-------------------clicked on specific name to take me to that profile---------
app.post('/Userprofile',function(req,res) {

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


    var roomId= req.body.roomid;
    var Comment=req.body.commet;



   var Comment2='INSERT INTO comments (comment,username,roomID) VALUES (\''+Comment+'\',\''+req.session.user.username+'\',\''+roomId+'\')';

    connect.query(Comment2);
    var allcomments='SELECT comments.username,comments.comment,users.imag FROM comments INNER JOIN users ON comments.username=users.username AND comments.roomID=\''+roomId+'\' ORDER BY comments.id';
    connect.query(allcomments,function(err,allcommentss){
        res.send(allcommentss)
    });
    

});

//---------languge-----------------------------
app.post('/translate',function(req,response){
  var value=req.body;

translate(req.body.text, {from:req.body.languageFrom+'', to: req.body.languageTo+'' })
   .then(res => {
       console.log(res.text);
       //=> I speak English
       //console.log(res.from.language.iso);
       //=> nl
       response.send(JSON.stringify(res.text))
   })
   .catch(err => {
       console.error(err);
   });
})

//------------status of the users in their profiles------------
app.post('/status',function(req,res){

  var Status='INSERT INTO users (status) VALUES (\''+req.body.status+'\')';
  connect.query(Status);
})





// -------------------------------------------------------------------------------
app.listen(port,function(){

});