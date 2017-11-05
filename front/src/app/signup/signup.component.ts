import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private _html=$("#myimg");
   public get htmlProperty() {
       return this._sanitizer.bypassSecurityTrustHtml(this._html);
    }

  days = [];
  years =[];
  d;
  m;
  y;
  date;
  nationality;
  location;
  image;
  url;
  ima(event){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
    this.url = reader["__zone_symbol__originalInstance"] ;
    console.log(this.url)

  }

  ngOnInit() {
  	for (var i = 1; i <= 31; ++i) {
  		this.days.push(i);
  	}
  	for (var i = 1905; i <= 2017; ++i) {
  		this.years.push(i);
  	}
  }

  username ;
  password;
  constructor(private http: Http,private router:Router,private _sanitizer:DomSanitizer){ 

  }
  signup() {
    this.y = $("#year").val();
    this.m = $("#month").val();
    this.d = $("#day").val();
    this.date = this.d + '/' + this.m + '/' + this.y;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/signup', {password : this.password , username : this.username, birthday:this.date, nationality:this.nationality, location:this.location, image:this.url}, {headers: headers})
    .map((res) => {
      if(res['_body']==='true'){
        this.router.navigateByUrl('/');
      }else{
        alert('account is already exist !!')
        this.router.navigateByUrl('/');
      }
    }).subscribe();
  }

}
