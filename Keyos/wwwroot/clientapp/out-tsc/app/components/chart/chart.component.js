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
import * as Highcharts from 'highcharts/highstock';
import DarkUnicaTheme from 'highcharts/themes/sunset';
import StockModule from 'highcharts/modules/stock';
import { StockdataService } from 'ClientApp/app/services/stockdata.service';
import { HttpClient } from '@angular/common/http';
StockModule(Highcharts);
DarkUnicaTheme(Highcharts);
var ChartComponent = /** @class */ (function () {
    function ChartComponent(stockData, http) {
        this.stockData = stockData;
        this.http = http;
        this.arr = [];
        this.arr1 = [];
        this.Highcharts = Highcharts;
        this.chartConstructor = 'stockChart';
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockData.getStockData().subscribe(function (t) {
            _this.arr = t;
            //console.log(this.arr);
            //this.arr.forEach(data => { console.log(data.date) });
            //{ Date:"",}
            _this.arr.forEach(function (data) { _this.arr1.push([Number(data.date), data.high]); });
            //pricesList.push([3234234, 32.43])
            //pricesList.push([3234234, 32.43])
            _this.chartOptions = {
                series: [{
                        name: 'AAPL',
                        type: 'area',
                        data: _this.arr1,
                        gapSize: 5,
                        tooltip: {
                            valueDecimals: 2
                        },
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]]
                            ]
                        },
                        threshold: null
                    }]
            };
        });
        //this.stockData.getStockData().subscribe((Response) =>{this.arr =  Response})
        //this.stockData.getStockData().subscribe((Response) => { Response})
        //his.stockData.getStockData().subscribe((Response) => { this.arr = Response as StockModel[]; }, error => console.error(error));
        //this.http.get("http://localhost:5000/api/Stocks").subscribe(result => {
        //    this.apps = result as StockModel[];
        //})
        //for (var i = 0; i < this.apps.length; i++) {
        //    console.log(this.apps[i].date);
        //}
        //console.log(this.apps);
        console.log(this.arr1);
    };
    ChartComponent = __decorate([
        Component({
            selector: 'app-chart',
            templateUrl: './chart.component.html',
            styleUrls: ['./chart.component.css']
        }),
        __metadata("design:paramtypes", [StockdataService, HttpClient])
    ], ChartComponent);
    return ChartComponent;
}());
export { ChartComponent };
//# sourceMappingURL=chart.component.js.map