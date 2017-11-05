import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})



export class UserProfileComponent implements OnInit {
  userData;
  currentUser;
  nationality;
  location;
  birthday;
  postdata;
  profile;
  status;
  username;
  userProf;
  //add this
  comment;
  comments;
  id;
  comID;
  constructor(private http : Http,private router:Router) {
    
   }

  ngOnInit() {
    this.username = $("#search").val()
    console.log(this.username)
    $.ajax({
            url :"/Userprofile",
            async : false,
            data : {username:this.username},
            type : "POST",
            success:(data)=>{
              console.log(data)                  
              this.userData = data;
             this.postdata = this.userData[0];
             this.currentUser=this.userData[1][0].username;
             this.nationality=this.userData[1][0].Nationallity;
             this.location=this.userData[1][0].Location;
             this.birthday = this.userData[1][0].Birthday;
             this.profile=this.userData[1][0].imag;
             this.status=this.userData[1][0].status;
             console.log('out',this.currentUser,this.nationality)

             
            }


          })
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

    }


