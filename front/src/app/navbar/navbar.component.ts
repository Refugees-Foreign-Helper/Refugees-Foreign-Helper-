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
         console.log(res.json())
         // this.show = res.json();
      // console.log("response from post",res.json());
      }else{
        
      }
    }).subscribe();
  }, 5000);
  }

}


