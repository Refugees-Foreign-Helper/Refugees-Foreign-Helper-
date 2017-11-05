import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
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
  constructor(private http : Http,private router:Router) {
    
   }

  ngOnInit() {
    // $.ajax({
    //         url :"/Userprofile",
    //         async : false,
    //         data : {username:this.username},
    //         type : "POST",
    //         success:(data)=>{
    //           console.log(data)
    //               // console.log(res.json())
                  
    //           this.userData = data;
    //          this.postdata = this.userData[0];
    //          this.currentUser=this.userData[1][0].username;
    //          this.nationality=this.userData[1][0].Nationallity;
    //          this.location=this.userData[1][0].Location;
    //          this.birthday = this.userData[1][0].Birthday;
    //          this.profile=this.userData[1][0].imag;
    //          this.status=this.userData[1][0].status;
    //          console.log('out',this.currentUser,this.nationality)

             
    //         }


          // })
  }
    // user=(username)=>{
    //   this.router.navigateByUrl('/Userprofile');
      

      
    
      // let headers = new Headers();
      // headers.append('Content-Type', 'application/json');
      // return this.http.post('/Userprofile',{username:username},{headers: headers})
      // .map((res) => {
      //   if(res){
      //     console.log(res.json())
      //     this.userData = res.json();
      //    this.postdata = this.userData[0];
      //    this.currentUser=this.userData[1][0].username;
      //    this.nationality=this.userData[1][0].Nationallity;
      //    this.location=this.userData[1][0].Location;
      //    this.birthday = this.userData[1][0].Birthday;
      //    this.profile=this.userData[1][0].imag;
      //    this.status=this.userData[1][0].status;
      //   }else{

      //   }
      // }).subscribe(); 
    }


