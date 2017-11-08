var mysql= require('mysql');
var express= require('express');
var http = require('http');
var app= express();
var morgan=require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt=require('bcrypt');
var setCookie = require('set-cookie');
var CookieParser = require('restify-cookies');
var translate = require('google-translate-api');


var server = app.listen(3000);

var io = require('socket.io').listen(server);  //pass a http.Server instance
var server = http.createServer(app);
// var path = require('path');
// var port=process.env.PORT || 3000;



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
// Host: sql9.freesqldatabase.com
// Database name: sql9203547
// Database user: sql9203547
// Database password: hhldFiMrKp
// Port number: 3306



var connect = mysql.createConnection({
  host: 'sql9.freesqldatabase.com',
  user:'sql9203547',
  password:'hhldFiMrKp',
  database:'sql9203547'
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
         res.send('true');

       }else{


         res.send('false');

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
        console.log('hhhh',result,req.body.username )
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

 var userroom = 'SELECT * FROM rooms WHERE userName=\''+req.body.username+'\'';
 var userinfo= 'SELECT * FROM users WHERE userName=\''+req.body.username+'\'';
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
app.put('/status',function(req,res){

  var Status='UPDATE  users SET status=\''+req.body.status+'\' WHERE username=\''+req.session.user.username+'\'';
  connect.query(Status);
})

app.get('/Chat', function(req,res){
  console.log('hanan',req.session.user.username)
  res.send(req.session.user.username)
})

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-----------------------------------
var numUsers = 0;
  console.log('numUsers',numUsers);
  var lans=[];
var lan;
io.on('connection', function (socket) {
  console.log('connected');
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    if(lans.indexOf(data.lan)===-1){
      lans.push(data.lan+'')
      console.log(data.lan)
    }
   // for(var i=0;i>lans.length;i++){
   //  if(data.lan+''!==lans[i]){
   //    data.lan=lans[i]
   //  }
   // } 
if(lans[0]===data.lan+''){
data.lan=lans[1];
}else{
data.lan=lans[0]
}
      
    console.log('array  ',lans);
    console.log('lan     ',data.lan);

    translate(data.message, { to:data.lan})

  .then(res => {

     console.log('hanan',res.text)
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message:  res.text,
      lan:data.lan
    });
     console.log('hanan',res.text)

    })
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username.username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
/////////////////////////////////////////////////////////////////////////////
// socket.on('stop speaking' || 'stop typing',function (data) {
//   console.log('stop speaking     ',data)
//     translate(data.text, {from:'en', to: 'en'})
//   .then(res => {

//    console.log('stop skeaoking tranzlate console here is     ',res.text);
// socket.emit('speaked',res.text);
//        //=> I speak English
//        //console.log(res.from.language.iso);
//        //=> nl
//        // response.send(JSON.stringify(res.text))
//      })
//   .catch(err => {
//    console.error(err);
//  });


// })



});





// -------------------------------------------------------------------------------
// app.listen(port,function(){

// });
