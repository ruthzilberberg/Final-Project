import { TestBed } from '@angular/core/testing';

import { TeachingAvailabilityService } from './teaching-availability.service';

describe('TeachingAvailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachingAvailabilityService = TestBed.get(TeachingAvailabilityService);
    expect(service).toBeTruthy();
  });
});
