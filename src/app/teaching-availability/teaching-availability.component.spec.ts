import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingAvailabilityComponent } from './teaching-availability.component';

describe('TeachingAvailabilityComponent', () => {
  let component: TeachingAvailabilityComponent;
  let fixture: ComponentFixture<TeachingAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
