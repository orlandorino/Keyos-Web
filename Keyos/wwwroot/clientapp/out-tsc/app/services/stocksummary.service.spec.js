import { TestBed } from '@angular/core/testing';
import { StocksummaryService } from './stocksummary.service';
describe('StocksummaryService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(StocksummaryService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=stocksummary.service.spec.js.map