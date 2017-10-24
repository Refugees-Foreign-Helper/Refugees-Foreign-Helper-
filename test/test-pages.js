var expect  = require('chai').expect;
var request = require('request');
var mysql= require('mysql');

it('Main page content', function(done) {
    this.timeout(4000);
    request('http://localhost:3000/main' , function(error, response, body) {
        expect(response.body.length>1).to.equal(true);
        done();
    });
});

    it('Main page status', function(done) {
        this.timeout(4500);
    request('http://localhost:3000/main' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

    it('About page content ', function(done) {
        this.timeout(3000);
    request('http://localhost:3000/login' , function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
    });
});

    it('About page content ', function(done) {
        this.timeout(3000);
    request('http://localhost:3000/login' , function(error, response, body) {
        expect(response.client._httpMessage.method).to.equal('GET');

        done();
    });
});

   describe('Access to DataBase', function(){
   describe('#right Access', function(){
        it('should return 0 because wrong credentials', function(done){
            var connect = mysql.createConnection({
    			host: 'sql12.freesqldatabase.com',
    			user:'sql12199746',
    			password:'hbpfE6sY22',
    			database:'sql12199746'
});
            connect.connect(done);
        });
    })
});




describe("users table", function () {
    describe("user table in Database", function () {
        it("should get stuff from users table in the database", function (done) {
             this.timeout(3000);
            var connect = mysql.createConnection({
                        host: 'sql12.freesqldatabase.com',
                        user:'sql12199746',
                        password:'hbpfE6sY22',
                        database:'sql12199746'
                    });
            var signup = 'SELECT * FROM users WHERE username="alaa" ';
            connect.query(signup,function(err,allusers){
                console.dir(allusers);
                expect(allusers.length).to.equal(1)
                done();
            })
        });
    });
});   
