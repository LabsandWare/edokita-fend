import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLayoutComponent } from './doctor-layout.component';

describe('DoctorLayoutComponentComponent', () => {
  let component: DoctorLayoutComponent;
  let fixture: ComponentFixture<DoctorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
