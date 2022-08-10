import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisioniComponent } from './revisioni.component';

describe('RevisioniComponent', () => {
  let component: RevisioniComponent;
  let fixture: ComponentFixture<RevisioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
