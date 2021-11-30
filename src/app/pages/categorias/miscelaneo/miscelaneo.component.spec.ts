import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscelaneoComponent } from './miscelaneo.component';

describe('MiscelaneoComponent', () => {
  let component: MiscelaneoComponent;
  let fixture: ComponentFixture<MiscelaneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscelaneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscelaneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
