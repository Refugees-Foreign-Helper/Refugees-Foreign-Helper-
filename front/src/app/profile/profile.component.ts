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
  constructor(private http : Http) { }

  ngOnInit() {
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.get('/main',{headers: headers})
    .map((res) => {
      if(res){
         this.userData = res.json();
         
      console.log("response from post",res.json());
      }else{
        
      }
    }).subscribe();
  }



}
