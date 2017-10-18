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
		
	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/signup', {password : this.password , username : this.username}, {headers: headers})
		.map((res) => {
			console.log(res)
			if(res){
				this.router.navigateByUrl('/login');
			}else{
				alert('account is already exist !!')
				this.router.navigateByUrl('/');
			}
		}).subscribe();
	}

}
