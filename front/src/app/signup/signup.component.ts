import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  	days = [];
  	years =[];
    d;
    m;
    y;
    date;
    nationality;
    location;
     // e = document.getElementById("y");
     // t= this.e.options[this.e.selectedIndex].value;
  ngOnInit() {
  	for (var i = 1; i <= 31; ++i) {
  		this.days.push(i);
  	}
  	for (var i = 1905; i <= 2017; ++i) {
  		this.years.push(i);
  	}
   }

    username ;
	password;
	constructor(private http: Http,private router:Router){ 

	}
	signup() {
		this.y = $("#year").val();
		this.m = $("#month").val();
		this.d = $("#day").val();
		this.date = this.d + '/' + this.m + '/' + this.y;
	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/signup', {password : this.password , username : this.username, birthday:this.date, nationality:this.nationality, location:this.location}, {headers: headers})
		.map((res) => {
			if(res){
				this.router.navigateByUrl('/login');
			}else{
				alert('account is already exist !!')
				this.router.navigateByUrl('/');
			}
		}).subscribe();
	}

}
