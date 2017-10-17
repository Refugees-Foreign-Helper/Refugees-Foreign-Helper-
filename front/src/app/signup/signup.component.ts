import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  ngOnInit() {
  }
  username ;
	password;
	constructor(private http: Http,private router:Router){ 

	}
	signup() {
		// var username = $("#username").val();
		// var password = $("#password").val();
		console.log(this.password)


		let headers = new Headers();
		headers.append('Content-Type' , 'appllication/json');

		return this.http.post('/signup',{username : this.username , password: this.password},{headers: headers})
		.map((res) => {
            if(res){
             this.router.navigateByUrl('/login');
            }else{
              alert('User already exists')	
            }
			
		});
	}

}
