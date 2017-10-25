import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $ :any;

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {
	posts;
  comment;
  comments;
  id;
  comID;
  flag;
  ngOnInit() {
  	//setInterval(() => {
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
 // }, 5000);
  }

  commentFun(postIndex,roomId){
    this.comment=$("#"+postIndex).val();
    this.id=roomId;
    this.comID=postIndex;
    console.log(this.comment)
    let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post('/postcomment',{commet:this.comment,roomid:this.id},{headers: headers})
    .map((res) => {
      if(res){
        this.comments=res.json()
        
      }else{
        
      }
    }).subscribe(); 
  }
  constructor(private http : Http) {}




}









