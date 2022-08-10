import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagliandiComponent } from './tagliandi.component';

describe('TagliandiComponent', () => {
  let component: TagliandiComponent;
  let fixture: ComponentFixture<TagliandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagliandiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagliandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
