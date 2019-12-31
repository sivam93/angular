import { TestBed } from '@angular/core/testing';

import { SalaryprocessService } from './salaryprocess.service';

describe('SalaryprocessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalaryprocessService = TestBed.get(SalaryprocessService);
    expect(service).toBeTruthy();
  });
});
