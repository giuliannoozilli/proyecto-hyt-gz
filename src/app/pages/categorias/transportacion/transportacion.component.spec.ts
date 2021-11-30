import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportacionComponent } from './transportacion.component';

describe('TransportacionComponent', () => {
  let component: TransportacionComponent;
  let fixture: ComponentFixture<TransportacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
