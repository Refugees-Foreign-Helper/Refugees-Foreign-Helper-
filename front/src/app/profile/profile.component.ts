import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

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
  constructor(private http : Http) { }

  ngOnInit() {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/profile',{headers: headers})
    .map((res) => {
      if(res){  

         this.userData = res.json();
         this.postdata = this.userData[0];
         this.currentUser=this.userData[1][0].username;
         this.nationality=this.userData[1][0].Nationallity;
         this.location=this.userData[1][0].Location;
         this.birthday = this.userData[1][0].Birthday;
         this.profile=this.userData[1][0].imag;


         // console.log("ttttttt",this.nationality);

   
      }else{
        
      }
    }).subscribe();
  }



}
