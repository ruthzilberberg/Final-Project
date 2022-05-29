import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsForTeachersComponent } from './groups-for-teachers.component';

describe('GroupsForTeachersComponent', () => {
  let component: GroupsForTeachersComponent;
  let fixture: ComponentFixture<GroupsForTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsForTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsForTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
