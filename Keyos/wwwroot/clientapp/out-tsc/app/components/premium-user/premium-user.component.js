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
import { DetailstockService } from '../../services/detailstock.service';
var PremiumUserComponent = /** @class */ (function () {
    function PremiumUserComponent(detailservice) {
        this.detailservice = detailservice;
        this.highcharts = Highcharts;
        this.displayedColumns = ['date', 'open', 'high', 'low', 'close'];
        this.Chart = [];
        this.dataSource = this.Chart;
    }
    PremiumUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var seriesOptions = [];
        seriesOptions[0] = {
            name: 'aapl',
            data: [[1293580800000, 46.47],
                [1293667200000, 46.24],
                [1293753600000, 46.08]]
        };
        seriesOptions[1] = {
            name: 'msft',
            data: [[1293580800000, 90.47],
                [1293667200000, 100.24],
                [1293753600000, 20.08]]
        };
        this.detailservice.GetForecastedData().subscribe(function (t) {
            var data = [];
            // let data2 = [];
            t.forEach(function (element) {
                var arr = [element.date, element.price];
                // var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
                data.push(arr);
                // data2.push(arr1);
            });
            _this.chartOptions = {
                title: {
                    text: "Forecast"
                },
                series: [{
                        name: 'AAPL',
                        type: 'line',
                        data: data,
                        gapSize: 5,
                        tooltip: {
                            valueDecimals: 2
                        },
                        fillColor: {
                            stops: [
                                [0, Highcharts.getOptions().colors[0]]
                            ]
                        }
                    },
                ]
            };
        });
        var buysell = [];
        var dates = [];
        this.detailservice.GetBuySellInitial().subscribe(function (data) {
            data.forEach(function (element) {
                var arr = {
                    y: element.price,
                    marker: {
                        symbol: 'url(https://i.imgur.com/8JtH3Ax.png)'
                    }
                };
                dates.push(element.date);
                buysell.push(arr);
            });
            _this.chartOptions2 = {
                chart: {
                    type: "spline"
                },
                title: {
                    text: "Buy/Sell Chart"
                },
                tooltip: {
                    valueDecimals: 2
                },
                xAxis: {
                    date: dates
                },
                series: [
                    {
                        name: 'AAPL',
                        marker: {
                            symbol: 'square'
                        },
                        data: buysell
                    },
                ]
            };
        });
    };
    PremiumUserComponent = __decorate([
        Component({
            selector: 'app-premium-user',
            templateUrl: './premium-user.component.html',
            styleUrls: ['./premium-user.component.css']
        }),
        __metadata("design:paramtypes", [DetailstockService])
    ], PremiumUserComponent);
    return PremiumUserComponent;
}());
export { PremiumUserComponent };
//# sourceMappingURL=premium-user.component.js.map