import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoturisticoComponent } from './circuitoturistico.component';

describe('CircuitoturisticoComponent', () => {
  let component: CircuitoturisticoComponent;
  let fixture: ComponentFixture<CircuitoturisticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitoturisticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitoturisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
