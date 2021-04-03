import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestStatementsComponent } from './latest-statements.component';

describe('LatestStatementsComponent', () => {
  let component: LatestStatementsComponent;
  let fixture: ComponentFixture<LatestStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
