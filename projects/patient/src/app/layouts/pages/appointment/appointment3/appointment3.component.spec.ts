import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appointment3Component } from './appointment3.component';

describe('Appointment3Component', () => {
  let component: Appointment3Component;
  let fixture: ComponentFixture<Appointment3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appointment3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appointment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
