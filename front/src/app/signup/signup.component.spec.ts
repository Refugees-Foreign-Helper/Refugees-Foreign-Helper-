import { TestBed, async } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe('SignupComponent', () => {
  let component= SignupComponent;
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have constructor', () => {
    expect(component.constructor).toBeTruthy();
  });
});