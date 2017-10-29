import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component= NavbarComponent;
  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should have constructor', () => {
    expect(component.constructor).toBeTruthy();
  });
});
