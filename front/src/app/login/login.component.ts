import { Component, Input, OnInit, AfterViewChecked} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Component ({
	selector: 'app-login',
	moduleId: module.id,
	templateUrl: './login.component.html' 
})

export class LoginComponent implements OnInit {
	ngOnInit(){

	}
	username ;
	password;
	constructor(private http: Http, private router:Router){ 

	}
	login() {
		console.log(this.password)


		let headers = new Headers();
		headers.append('Content-Type' , 'appllication/json');
        // ;
		return this.http.post('/login',{username : this.username , password: this.password},{headers: headers})
		.map((res) => {
			//res.json()
			if(res){
				this.router.navigateByUrl('/main');
			}else{
				alert('wrong password or username stupid!!!')
				this.router.navigateByUrl('/');
			}
		});
		
	}

	// login(){ 
		
	// 	return this.
	// }
}