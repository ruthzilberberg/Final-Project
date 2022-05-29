import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInsertUpdateComponent } from './student-insert-update.component';

describe('StudentInsertUpdateComponent', () => {
  let component: StudentInsertUpdateComponent;
  let fixture: ComponentFixture<StudentInsertUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInsertUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInsertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
