// import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {DataService} from './../data.service' //1
import {Router} from '@angular/router';
import {SignupComponent} from '../signup/signup.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[DataService,SignupComponent] //2
})
export class NavbarComponent implements OnInit {
  show ;
  flag:boolean; //3
  constructor(private http : Http, public data:DataService,private router : Router, public signup: SignupComponent) { }

  ngOnInit() {
    this.data.currentFlag.subscribe(flag=>this.flag=flag) //4
  // 	setInterval(() => {
  //    let headers = new Headers();
  //  headers.append('Content-Type', 'application/json');
  //   return this.http.get('/show',{headers: headers})
  //   .map((res) => {
  //     if(res){
  //        this.show = res.json();
  //     }else{
        
  //     }
  //   }).subscribe();
  // }, 5000);
  }
password;
username;
toggle;
  login() {
   
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/login', {password : this.password , username : this.username}, {headers: headers})
    .map((res) => {
      if(res){
        this.data.changeFlag(!this.flag);
        console.log(this.flag, 'hghgfghfgh');
        this.router.navigateByUrl('/main');
      }else{
        alert('wrong password or username stupid!!!')
        this.router.navigateByUrl('/');
      }

    }).subscribe();

    
  }

  logout(){
    this.data.changeFlag(!this.flag); //5
     let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/logout',{headers: headers})
    .map((res) => { }).subscribe();
  }

}


