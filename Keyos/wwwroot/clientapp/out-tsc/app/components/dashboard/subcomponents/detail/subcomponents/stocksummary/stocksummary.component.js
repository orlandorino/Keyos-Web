var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DetailstockService } from '../../../../../../services/detailstock.service';
var StocksummaryComponent = /** @class */ (function () {
    function StocksummaryComponent(detailstock) {
        this.detailstock = detailstock;
        this.CompanyInfo = { description: "General Electric Co is a digital industrial company. It operates in various segments, including power and water, oil and gas, energy management, aviation, healthcare, transportation, appliances and lighting, and more.",
            exchange: "New York Stock Exchange", sector: "Industrials", industry: "Industrial Products" };
        this.CompanyStats = { float: 8600000000, sharesOutstanding: 8600000000, week52low: 6.66, week52high: 15.59, marketcap: 88460000000, beta: 0.988, latestEPS: -2.62, latestEPSDate: new Date(12312018), dividendRate: 0.04, dividendYield: 0.393, exDividendDate: new Date(3082019) };
        this.StockQuote = { symbol: "AAPL", companyName: "Apple Inc.", latestPrice: 172.97, sector: "Technology",
            change: 1.91, changePercent: 0.01117,
            marketCap: 815601981600,
            avgTotalVolume: 29259479,
            latestVolume: 18737202,
            peRatio: 14.57,
            latestSource: "Close",
            latestTime: "February 22, 2019",
            open: 104,
            previousClose: 10.4 };
    }
    StocksummaryComponent.prototype.ngOnInit = function () {
        // if IEX api is being use comment out to not waste api calls 
        var _this = this;
        this.detailstock.getStockCompanyInfo().subscribe(function (val) {
            _this.CompanyInfo = val;
            console.log(_this.CompanyInfo, "test");
        });
        this.detailstock.getStockStats().subscribe(function (val1) {
            _this.CompanyStats = val1;
            console.log(_this.CompanyStats);
        });
        this.StockQuote = this.detailstock.getStockInfo();
    };
    StocksummaryComponent = __decorate([
        Component({
            selector: 'app-stocksummary',
            templateUrl: './stocksummary.component.html',
            styleUrls: ['./stocksummary.component.css']
        }),
        __metadata("design:paramtypes", [DetailstockService])
    ], StocksummaryComponent);
    return StocksummaryComponent;
}());
export { StocksummaryComponent };
//# sourceMappingURL=stocksummary.component.js.map