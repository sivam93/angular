import { TestBed } from '@angular/core/testing';

import { LoadmonthService } from './loadmonth.service';

describe('LoadmonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadmonthService = TestBed.get(LoadmonthService);
    expect(service).toBeTruthy();
  });
});
