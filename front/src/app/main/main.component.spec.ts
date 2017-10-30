import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component= MainComponent;
  it('should create', () => {
    expect(component).toBeTruthy();
  });

     it('should have constructor', () => {
    expect(component.constructor).toBeTruthy();
  });
});
