import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http : Http) { }

  ngOnInit() {
  }
  main(){
  	let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    return this.http.get('http://127.0.0.1:3000/main',{headers: headers}).map((res) => {
      console.log('tdert' ,res);
     // this.posts = res;
    })
  }

}
