import { TestBed } from '@angular/core/testing';

import { TeachingGroupService } from './teaching-group.service';

describe('TeachingGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachingGroupService = TestBed.get(TeachingGroupService);
    expect(service).toBeTruthy();
  });
});
