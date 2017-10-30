import { Component, Input, OnInit, AfterViewChecked} from '@angular/core';
import {Injectable} from '@angular/core';
import {DataService} from './../data.service' //1
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component'


export let toggle = true;
@Component ({
	selector: 'app-login',
	moduleId: module.id,
	templateUrl: './login.component.html',
    providers:[DataService] //2
})
// @Injectable()
export class LoginComponent implements OnInit {
	
	flag:boolean;
	username ;
	password;
	// login;
	constructor(private http: Http, private router:Router, public data:DataService,public logs:NavbarComponent){
	// this.login = this.logs.login;
		// this.login = log.login();
	}
	ngOnInit(){
       this.data.currentFlag.subscribe(flag=>this.flag=flag) //2
	}

	login() {	
	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/login', {password : this.password , username : this.username}, {headers: headers})
		.map((res) => {
			if(res){
				this.data.changeFlag(true);
				//console.log("rearea",res)
				// console.log("showHidda",toggle);
				this.router.navigateByUrl('/main');
			}else{
				alert('wrong password or username stupid!!!')
				this.router.navigateByUrl('/');
			}
		}).subscribe();		
	}
}

