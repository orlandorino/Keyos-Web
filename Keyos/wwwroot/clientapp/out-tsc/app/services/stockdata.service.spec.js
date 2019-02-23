import { TestBed } from '@angular/core/testing';
import { StockdataService } from './stockdata.service';
describe('StockdataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(StockdataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=stockdata.service.spec.js.map