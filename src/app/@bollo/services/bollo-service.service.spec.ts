import { TestBed } from '@angular/core/testing';

import { BolloServiceService } from './bollo-service.service';

describe('BolloServiceService', () => {
  let service: BolloServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolloServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
