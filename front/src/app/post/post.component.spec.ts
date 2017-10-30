import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component= PostComponent;
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have constructor', () => {
    expect(component.constructor).toBeTruthy();
  });


});
