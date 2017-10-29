import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';

describe('LanguageComponent', () => {
  let component= LanguageComponent;
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //   it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(LanguageComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h4').textContent).toContain('Let\'s Make Communication Easier');
  // }));
});
