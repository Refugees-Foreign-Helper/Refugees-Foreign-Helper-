import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit() {
  }
  constructor(private http: Http) { }
  description;
  location;
  image;
  contactInfo;

  submit(){
  	console.log(this.location)
    let headers = new Headers();
	headers.append('Content-Type' , 'appllication/json');

	return this.http.post('http://127.0.0.1:3000/post',{location : this.location , description: this.description, image:this.image, contactInfo:this.contactInfo},{headers: headers})
		.map(res => {console.log(res)

    }
      
  }

}
