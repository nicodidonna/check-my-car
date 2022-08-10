import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssicurazioneBolloComponent } from './assicurazione-bollo.component';

describe('AssicurazioneBolloComponent', () => {
  let component: AssicurazioneBolloComponent;
  let fixture: ComponentFixture<AssicurazioneBolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssicurazioneBolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssicurazioneBolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
