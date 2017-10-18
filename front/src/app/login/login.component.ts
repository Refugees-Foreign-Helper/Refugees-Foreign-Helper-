import { Component, Input, OnInit, AfterViewChecked} from '@angular/core';
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Component ({
	selector: 'app-login',
	moduleId: module.id,
	templateUrl: './login.component.html' 
})
@Injectable()
export class LoginComponent implements OnInit {
	ngOnInit(){

	}
	username ;
	password;
	constructor(private http: Http, private router:Router){ 

	}
	login() {

	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/login', {password : this.password , username : this.username}, {headers: headers})
		.map((res) => {
			//console.log(res)
			if(res){
				this.router.navigateByUrl('/main');
			}else{
				alert('wrong password or username stupid!!!')
				this.router.navigateByUrl('/');
			}
		}).subscribe();
		
	}

}