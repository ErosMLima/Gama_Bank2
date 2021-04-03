import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexityComponent } from './complexity.component';




describe('ComplexityComponent', () => {
  let component: ComplexityComponent;
  let fixture: ComponentFixture<ComplexityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
