import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagedStudentComponent } from './engaged-student.component';

describe('EngagedStudentComponent', () => {
  let component: EngagedStudentComponent;
  let fixture: ComponentFixture<EngagedStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagedStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
