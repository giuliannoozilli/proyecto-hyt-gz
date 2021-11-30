import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosdeexitoComponent } from './casosdeexito.component';

describe('CasosdeexitoComponent', () => {
  let component: CasosdeexitoComponent;
  let fixture: ComponentFixture<CasosdeexitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosdeexitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasosdeexitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
