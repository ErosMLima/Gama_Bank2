import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewPasswordComponent } from './request-new-password.component';

describe('RequestNewPasswordComponent', () => {
  let component: RequestNewPasswordComponent;
  let fixture: ComponentFixture<RequestNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
