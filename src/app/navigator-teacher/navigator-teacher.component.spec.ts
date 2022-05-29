import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorTeacherComponent } from './navigator-teacher.component';

describe('NavigatorTeacherComponent', () => {
  let component: NavigatorTeacherComponent;
  let fixture: ComponentFixture<NavigatorTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
