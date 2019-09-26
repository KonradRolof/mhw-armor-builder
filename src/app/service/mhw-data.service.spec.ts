import { TestBed } from '@angular/core/testing';

import { MhwDataService } from './mhw-data.service';

describe('MhwDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MhwDataService = TestBed.get(MhwDataService);
    expect(service).toBeTruthy();
  });
});
