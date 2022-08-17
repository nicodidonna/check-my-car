import { TestBed } from '@angular/core/testing';

import { AssicurazioneServiceService } from './assicurazione-service.service';

describe('AssicurazioneServiceService', () => {
  let service: AssicurazioneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssicurazioneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
