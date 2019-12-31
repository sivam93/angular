import { TestBed } from '@angular/core/testing';

import { FinancialexceptionsService } from './financialexceptions.service';

describe('FinancialexceptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialexceptionsService = TestBed.get(FinancialexceptionsService);
    expect(service).toBeTruthy();
  });
});
