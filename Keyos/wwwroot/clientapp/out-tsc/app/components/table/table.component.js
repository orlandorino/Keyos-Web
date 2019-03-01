var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { StocksummaryService } from '../../services/stocksummary.service';
import { DataSource } from '@angular/cdk/table';
import { DetailstockService } from '../../services/detailstock.service';
import { Router } from '@angular/router';
var mock = [
    { symbol: "AABA", companyName: "Altaba Inc.", sector: "Financial Services", change: -0.76, changePercent: -1.1079999999999999, marketCap: 10101010, avgTotalVolume: 1010000, latestVolume: 10000000, peRatio: 1001000, previousClose: 10.4 },
    { symbol: "AAPL", companyName: "Apple Inc.", sector: "Technology", change: 0.76, changePercent: 1.1079999999999999 }
];
var TableComponent = /** @class */ (function () {
    //dataSource = mock;
    function TableComponent(stocksummary, detailstock, router) {
        this.stocksummary = stocksummary;
        this.detailstock = detailstock;
        this.router = router;
        this.displayedColumns = ['symbol', 'CompanyName', 'LatestPrice', 'PercentChange', 'avgTotalVolume', 'marketCap'];
        this.quote = [];
        this.dataSource = new QuoteDataSource(this.stocksummary);
    }
    TableComponent.prototype.ngOnInit = function () {
        // this.stocksummary.getStocks().subscribe(t => {
        // this.quote = t;
        //    console.log(this.quote);
        //  });   
    };
    TableComponent.prototype.getRecord = function (row) {
        this.detailstock.setStockInfo(row);
        this.router.navigate(["dashboard/detail"]);
    };
    TableComponent.prototype.getColor = function (percent) {
        if (percent.toString().includes("-")) {
            this.icon = 'arrow_downward';
            return 'red';
        }
        else {
            this.icon = 'arrow_upward';
            return 'green';
        }
    };
    TableComponent = __decorate([
        Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [StocksummaryService, DetailstockService, Router])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
var QuoteDataSource = /** @class */ (function (_super) {
    __extends(QuoteDataSource, _super);
    function QuoteDataSource(stocksummary) {
        var _this = _super.call(this) || this;
        _this.stocksummary = stocksummary;
        return _this;
    }
    QuoteDataSource.prototype.connect = function () {
        return this.stocksummary.getStocks();
    };
    QuoteDataSource.prototype.disconnect = function () { };
    return QuoteDataSource;
}(DataSource));
export { QuoteDataSource };
//# sourceMappingURL=table.component.js.map