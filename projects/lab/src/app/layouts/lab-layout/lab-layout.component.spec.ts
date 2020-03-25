import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabLayoutComponent } from './lab-layout.component';

describe('LabLayoutComponent', () => {
  let component: LabLayoutComponent;
  let fixture: ComponentFixture<LabLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
