import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
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
  	
  }
  constructor(private http : Http) {}
// mains(){
//     let headers = new Headers();
//    headers.append('Content-Type', 'application/json');
//     return this.http.get('http://127.0.0.1:3000/main',{headers: headers})
//     .map((res) => {
//       if(res){
//       console.log("response from post",res);
//       }else{
        
//       }
//     }).subscribe();
//}
  
 
}









