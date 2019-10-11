import { TestBed } from '@angular/core/testing';

import { MhwSortingService } from './mhw-sorting.service';

describe('MhwSortingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MhwSortingService = TestBed.get(MhwSortingService);
    expect(service).toBeTruthy();
  });
});
