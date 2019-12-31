import { TestBed } from '@angular/core/testing';

import { MostprobablematchService } from './mostprobablematch.service';

describe('MostprobablematchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostprobablematchService = TestBed.get(MostprobablematchService);
    expect(service).toBeTruthy();
  });
});
