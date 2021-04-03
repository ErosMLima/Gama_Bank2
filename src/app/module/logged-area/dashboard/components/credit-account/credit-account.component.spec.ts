import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAccountComponent } from './credit-account.component';

describe('CreditAccountComponent', () => {
  let component: CreditAccountComponent;
  let fixture: ComponentFixture<CreditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
