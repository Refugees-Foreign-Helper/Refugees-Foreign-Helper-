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
  image;
  contactInfo;
  submit(){
  let headers = new Headers();
   headers.append('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:3000/post', {location : this.location , description: this.description, image:this.image, contactInfo:this.contactInfo}
     ,{headers: headers})
    .map((res) => {
      if(res){
      
      }else{
        
      }
    }).subscribe();
  }
}
