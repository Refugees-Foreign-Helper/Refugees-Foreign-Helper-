import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData;
  currentUser;
  nationality;
  location;
  birthday;
  postdata;
  profile;
  status;
  constructor(private http : Http) { }

  ngOnInit() {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/profile',{headers: headers})
    .map((res) => {
      if(res){  
console.log(res)
         this.userData = res.json();
         this.postdata = this.userData[0];
         this.currentUser=this.userData[1][0].username;
         this.nationality=this.userData[1][0].Nationallity;
         this.location=this.userData[1][0].Location;
         this.birthday = this.userData[1][0].Birthday;
         this.profile=this.userData[1][0].imag;
         this.status=this.userData[1][0].status;


         // console.log("ttttttt",this.nationality);

   
      }else{
        
      }
    }).subscribe();
  }

  getStatus(){
    let set=$('#status').val();
    this.status=$('#status').val();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.put('/status',{status:set},{headers: headers})
      .map((res) => {}).subscribe(); 

  }

  user(username){
    console.log("areej 7ywana")
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/Userprofile',{username:username},{headers: headers})
      .map((res) => {
        if(res){
          console.log(res)
          
        }else{

        }
      }).subscribe(); 
    }



}
