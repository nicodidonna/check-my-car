import { TestBed } from '@angular/core/testing';

import { RevisioneServiceService } from './revisione-service.service';

describe('RevisioneServiceService', () => {
  let service: RevisioneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisioneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
