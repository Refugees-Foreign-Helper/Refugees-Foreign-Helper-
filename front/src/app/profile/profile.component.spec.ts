import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component= ProfileComponent;
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have constructor', () => {
    expect(component.constructor).toBeTruthy();
  });
});
