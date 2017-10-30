import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import {DataService} from './data.service';

@Component({
	moduleId:module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataService]
})
export class AppComponent {

}

