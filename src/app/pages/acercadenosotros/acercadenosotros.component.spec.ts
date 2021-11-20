import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadenosotrosComponent } from './acercadenosotros.component';

describe('AcercadenosotrosComponent', () => {
  let component: AcercadenosotrosComponent;
  let fixture: ComponentFixture<AcercadenosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercadenosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadenosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
