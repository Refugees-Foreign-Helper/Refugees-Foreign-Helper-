import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProfileComponent } from "../profile/profile.component"
declare var jquery:any;
declare var $ :any;

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ProfileComponent]
})


export class MainComponent implements OnInit {
  constructor(private http : Http ,public userProfile : ProfileComponent) {}
  posts;
  comment;
  comments;
  id;
  comID;
  flag;
  user = this.userProfile.user;

  ngOnInit() {
    //setInterval(() => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get('/main',{headers: headers})
      .map((res) => {
        if(res){
          this.posts = res.json();
          console.log(this.posts)
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
    // user(username){
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.post('/UserProfile',{user:username},{headers: headers})
    //   .map((res) => {
    //     if(res){
          
          
    //     }else{

    //     }
    //   }).subscribe(); 
    // }




  }









