import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 // it('should have a defined component', () => {
 //      expect(component).toBeDefined();
 //  });
});

// describe("A spy, when configured to fake a return value", function() {
//   var username = "alaa";
//   it("tracks that the spy was called", function() {
//     expect(SignupComponent).toEqual("alaa");;
//   });

// }
