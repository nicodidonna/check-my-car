import { TestBed } from '@angular/core/testing';

import { TagliandoServiceService } from './tagliando-service.service';

describe('TagliandoServiceService', () => {
  let service: TagliandoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagliandoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
