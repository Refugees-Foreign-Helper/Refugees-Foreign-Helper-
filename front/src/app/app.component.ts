import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
	moduleId:module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

}

// export class AppComponent implements AfterViewInit{

// 	@ViewChild(LoginComponent)
// 	private login:LoginComponent;
// 	test = this.login.x;

// 	ngAfterViewInit(){

// 		console.log("hiiiiiiiiiiį" ,this.login.x);

// 	}
	

// }
