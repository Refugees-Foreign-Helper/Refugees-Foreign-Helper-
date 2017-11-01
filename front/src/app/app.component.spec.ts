import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

// describe('AppComponent',() =>{
//   it('should create',()=>{
//     let component = new AppComponent();
//     expect(true).toBe(true);
//   });
// });

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,
      NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

