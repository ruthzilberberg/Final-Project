import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorSecretaryComponent } from './navigator-secretary.component';

describe('NavigatorSecretaryComponent', () => {
  let component: NavigatorSecretaryComponent;
  let fixture: ComponentFixture<NavigatorSecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorSecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
