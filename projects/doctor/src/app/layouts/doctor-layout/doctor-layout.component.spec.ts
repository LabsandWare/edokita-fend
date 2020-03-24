import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLayoutComponentComponent } from './doctor-layout-component.component';

describe('DoctorLayoutComponentComponent', () => {
  let component: DoctorLayoutComponentComponent;
  let fixture: ComponentFixture<DoctorLayoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorLayoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
