import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyLifeComponent } from './simplify-life.component';




describe('SimplifyLifeComponent', () => {
  let component: SimplifyLifeComponent;
  let fixture: ComponentFixture<SimplifyLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplifyLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifyLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
