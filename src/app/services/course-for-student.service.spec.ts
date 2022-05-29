import { TestBed } from '@angular/core/testing';

import { CourseForStudentService } from './course-for-student.service';

describe('CourseForStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseForStudentService = TestBed.get(CourseForStudentService);
    expect(service).toBeTruthy();
  });
});
