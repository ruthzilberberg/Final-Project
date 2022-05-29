import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryInsertUpdateComponent } from './secretary-insert-update.component';

describe('SecretaryInsertUpdateComponent', () => {
  let component: SecretaryInsertUpdateComponent;
  let fixture: ComponentFixture<SecretaryInsertUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryInsertUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryInsertUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
