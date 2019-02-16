import { TestBed } from '@angular/core/testing';

import { StockdataService } from './stockdata.service';

describe('StockdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockdataService = TestBed.get(StockdataService);
    expect(service).toBeTruthy();
  });
});
