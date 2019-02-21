import { TestBed } from '@angular/core/testing';

import { DetailstockService } from './detailstock.service';

describe('DetailstockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailstockService = TestBed.get(DetailstockService);
    expect(service).toBeTruthy();
  });
});
