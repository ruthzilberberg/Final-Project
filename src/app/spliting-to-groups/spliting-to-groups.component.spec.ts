import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitingToGroupsComponent } from './spliting-to-groups.component';

describe('SplitingToGroupsComponent', () => {
  let component: SplitingToGroupsComponent;
  let fixture: ComponentFixture<SplitingToGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitingToGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitingToGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
