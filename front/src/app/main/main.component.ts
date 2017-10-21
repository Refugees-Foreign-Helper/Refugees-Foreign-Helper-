import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { LoginComponent } from '../login/login.component';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
	posts;
  ngOnInit() {
  	setInterval(() => {
     let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/main',{headers: headers})
    .map((res) => {
      if(res){
         this.posts = res.json();
      // console.log("response from post",res.json());
      }else{
        
      }
    }).subscribe();
  }, 5000);
  }
  constructor(private http : Http) {}




}









