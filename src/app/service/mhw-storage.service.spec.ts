import { TestBed } from '@angular/core/testing';

import { MhwStorageService } from './mhw-storage.service';

describe('MhwStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MhwStorageService = TestBed.get(MhwStorageService);
    expect(service).toBeTruthy();
  });
});
