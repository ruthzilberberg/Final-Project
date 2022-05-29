import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersGroupsComponent } from './teachers-groups.component';

describe('TeachersGroupsComponent', () => {
  let component: TeachersGroupsComponent;
  let fixture: ComponentFixture<TeachersGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
