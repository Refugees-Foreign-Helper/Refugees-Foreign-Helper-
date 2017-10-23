// import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {toggle} from '../login/login.component';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show ;
  constructor(private http : Http) { }

  ngOnInit() {
  	setInterval(() => {
     let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/show',{headers: headers})
    .map((res) => {
      if(res){
         this.show = res.json();
      }else{
        
      }
    }).subscribe();
  }, 5000);
  }

  logout(){
     let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/logout',{headers: headers})
    .map((res) => { }).subscribe();
  }

}


