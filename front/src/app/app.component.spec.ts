import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('AppComponent',() =>{
  it('should create',()=>{
    let component = new AppComponent();
    expect(true).toBe(true);
  });
});

