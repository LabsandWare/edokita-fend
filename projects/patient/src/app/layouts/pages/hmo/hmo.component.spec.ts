import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HMOComponent } from './hmo.component';

describe('HMOComponent', () => {
  let component: HMOComponent;
  let fixture: ComponentFixture<HMOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HMOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HMOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
