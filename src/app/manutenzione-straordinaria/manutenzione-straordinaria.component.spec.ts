import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenzioneStraordinariaComponent } from './manutenzione-straordinaria.component';

describe('ManutenzioneStraordinariaComponent', () => {
  let component: ManutenzioneStraordinariaComponent;
  let fixture: ComponentFixture<ManutenzioneStraordinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutenzioneStraordinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutenzioneStraordinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
