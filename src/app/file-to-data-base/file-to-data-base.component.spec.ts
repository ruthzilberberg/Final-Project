import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToDataBaseComponent } from './file-to-data-base.component';

describe('FileToDataBaseComponent', () => {
  let component: FileToDataBaseComponent;
  let fixture: ComponentFixture<FileToDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileToDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
