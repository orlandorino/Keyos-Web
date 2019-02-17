import { TestBed } from '@angular/core/testing';

import { StocksummaryService } from './stocksummary.service';

describe('StocksummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksummaryService = TestBed.get(StocksummaryService);
    expect(service).toBeTruthy();
  });
});
