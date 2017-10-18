var mysql= require('mysql');
var express= require('express');
var app= express();
var favicon = require('serve-favicon');
var morgan=require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var port=process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname+'/front/dist/')) //Serve the client files.
// app.use(express.static(path.join(__dirname, '/./dist/')));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(morgan('dev'));
app.use(session({
	secret: 'shhh, it\'s a secret',
	resave:false,
	saveUninitialized: true
}));
// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//    //Request methods u wish to allow
   
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//    //Request header you widht to allow
   
// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//    //Pass to next Layer of middleware
 
// next();
// })


// app.get('/', (req, res) => {
// 	res.end();
// })

var connect = mysql.createConnection({
	host: 'sql12.freesqldatabase.com',
	user:'sql12199746',
	password:'hbpfE6sY22',
	database:'sql12199746'
});

// ---------------------create table and connection--------------------------------
connect.connect(function (err) {
	if(err){
		console.log(err)
	}
	console.log('Connected :)>>')

	var userTable = `CREATE TABLE IF NOT EXISTS users(
	id INT AUTO_INCREMENT PRIMARY KEY,
	username varchar(255),
	password varchar(255)
	)`

	// var roomTable = `CREATE TABLE IF NOT EXISTS rooms(
	// id INT AUTO_INCREMENT PRIMARY KEY,
	// discribtion varchar(20)
	// imag varchar(20)
	// )`
	connect.query(userTable,function(err,result){
		if(err){
			console.log(err)
		}
		console.log('table1 created ! :)')
	})
	// connect.query(roomTable,function(err,result){
	// 	if(err){
	// 		console.log(err)
	// 	}
	// 	console.log('table2 created ! :)')
	// })
});
// -----------------Sign Up ----and ------Login------------------------------------
// ----------------------sign up----------------------------------------
var result='false';
app.post('/signup',function (req,res) {
	var username=  "'"+req.body.username+"'";
	var password="'"+req.body.password+"'";
	// console.log('password',req.body)
	// console.log('username',username)

	var signup = 'SELECT * FROM users WHERE username='+username;
	
     
	connect.query(signup,function (err,checkeduser) {
		if(checkeduser.length<1){
			console.log("<1 ",checkeduser)
			var data = "INSERT INTO users (username,password) VALUES ("+username+","+password+")";
			result='true'
			connect.query(data)
			res.send(result)

		}else{
			result='false'
			console.log('username already exist :(')
			res.send(result)

		}
	})
})

// ---------------------login-----------------------------------------
app.post('/login',function(req,res){
// 	var username= "'" +req.body.username+"'";
// 	var password="'"+req.body.password+"'";
console.log(req.body.password);
console.log(req.body.username);

var username=  "'"+req.body.username+"'";
var password= "'"+req.body.password+"'";

var login = 'SELECT * FROM users WHERE username='+username+',password='+password;

connect.query(login,function(err,checkeduser){
	if(checkeduser!==[]){//user exists
		result='true';
		
		res.send(result)
	}else{
		result='false'
		res.send(result)
	}
})



	
})







// -------------------------------------------------------------------------------
app.listen(port,function(){
	console.log("connected server at ?",port)
})

