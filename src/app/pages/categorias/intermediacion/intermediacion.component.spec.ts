import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediacionComponent } from './intermediacion.component';

describe('IntermediacionComponent', () => {
  let component: IntermediacionComponent;
  let fixture: ComponentFixture<IntermediacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
