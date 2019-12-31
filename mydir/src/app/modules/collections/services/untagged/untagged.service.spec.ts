import { TestBed } from '@angular/core/testing';

import { UntaggedService } from './untagged.service';

describe('UntaggedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UntaggedService = TestBed.get(UntaggedService);
    expect(service).toBeTruthy();
  });
});
