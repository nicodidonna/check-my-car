import { TestBed } from '@angular/core/testing';

import { ManutenzioneServiceService } from './manutenzione-service.service';

describe('ManutenzioneServiceService', () => {
  let service: ManutenzioneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManutenzioneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
