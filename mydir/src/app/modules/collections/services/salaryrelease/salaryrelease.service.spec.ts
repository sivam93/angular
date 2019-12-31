import { TestBed } from '@angular/core/testing';

import { SalaryreleaseService } from './salaryrelease.service';

describe('SalaryreleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaryreleaseService = TestBed.get(SalaryreleaseService);
    expect(service).toBeTruthy();
  });
});
