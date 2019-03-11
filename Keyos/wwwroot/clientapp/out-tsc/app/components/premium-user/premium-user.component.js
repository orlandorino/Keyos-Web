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
            // this.Chart = t;
            // this.dataSource = this.Chart;
            var data = [];
            // let data2 = [];
            _this.dataSource.forEach(function (element) {
                var arr = [new Date(element.date).getTime(), element.close];
                // var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
                data.push(arr);
                // data2.push(arr1);
            });
            _this.chartOptions = {
                series: [{
                        name: 'AAPL',
                        type: 'line',
                        data: data,
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
                        }
                    },
                    {
                        name: 'AAPL',
                        type: 'line',
                        data: data,
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
                        }
                    },
                ]
            };
        });
        //  this.chartOptions = {   
        //     chart: {
        //        type: "spline"
        //     },
        //     title: {
        //        text: "Monthly Average Temperature"
        //     },
        //     subtitle: {
        //        text: "Source: WorldClimate.com"
        //     },
        //     xAxis:{
        //        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        //           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        //     },
        //     yAxis: {          
        //        title:{
        //           text:"Temperature °C"
        //        } 
        //     },
        //     tooltip: {
        //        valueSuffix:" °C"
        //     },
        //     series: [
        //       {
        //         name: 'Tokyo',
        //         marker: {
        //            symbol: 'square'
        //         },
        //         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
        //            y: 26.5,
        //            marker: {
        //               symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
        //            }
        //         }, 23.3, 18.3, 13.9, 9.6]
        //      }, 
        //      {
        //         name: 'London',
        //         marker: {
        //            symbol: 'diamond'
        //         },
        //         data: [{
        //            y: 3.9,
        //            marker: {
        //               symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
        //            }
        //         }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        //      }
        //     ]
        //  };
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