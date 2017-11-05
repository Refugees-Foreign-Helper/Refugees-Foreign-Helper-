import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
  ngOnInit() {
  }
constructor(private http: Http) { }
  
  

  description;
  location;
  contactInfo;
  image;
  url;
  public ima(event){
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  }
 this.url = reader["__zone_symbol__originalInstance"] ;

  }

  submit(){
  let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post('/post', {location : this.location , discribtion: this.description, image:this.url, contactInfo:this.contactInfo}
     ,{headers: headers})
    .map((res) => {
      if(res){
      console.log("response from post",res);
      }else{
        
      }
    }).subscribe();
  }
}