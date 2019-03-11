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
import { DetailstockService } from '../../../../services/detailstock.service';
import * as Highcharts from 'highcharts/highstock';
var DetailComponent = /** @class */ (function () {
    function DetailComponent(detailservice) {
        this.detailservice = detailservice;
        this.Highcharts = Highcharts;
        this.displayedColumns = ['date', 'open', 'high', 'low', 'close'];
        this.Chart = [];
        this.dataSource = this.Chart;
        this.chartConstructor = 'stockChart';
        this.StockQuote = { symbol: "AAPL", companyName: "Apple Inc.", latestPrice: 172.97, sector: "Technology",
            change: 1.91, changePercent: -0.01117,
            marketCap: 815601981600,
            avgTotalVolume: 29259479,
            latestVolume: 18737202,
            peRatio: 14.57,
            latestSource: "Close",
            latestTime: "February 22, 2019",
            previousClose: 10.4 };
        this.BuyOrSell = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.detailservice.symbol = 'aapl';
        this.detailservice.GetBuySellInitial().subscribe(function (x) {
            console.log(x);
        });
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
        //     this.detailservice.getStockHistory().subscribe (t =>{
        //       this.Chart = t;
        //       this.dataSource = this.Chart;
        //       let data = [];
        //         let data2 = [];
        //       this.dataSource.forEach(element => {
        //         var arr = [new Date(element.date).getTime() / 1000,element.close];
        //         var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
        //         data.push(arr);
        //         data2.push(arr1);
        //       });
        //       this.chartOptions = {
        //         series: [{
        //             name: 'AAPL',
        //             type: 'line',
        //             data: data,
        //             gapSize: 5,
        //             tooltip: {
        //                 valueDecimals: 2
        //             },
        //             fillColor: {
        //                 linearGradient: {
        //                     x1: 0,
        //                     y1: 0,
        //                     x2: 0,
        //                     y2: 1
        //                 },
        //                 stops: [
        //                     [0, Highcharts.getOptions().colors[0]]
        //                 ]
        //             }},
        //             {
        //               name: 'AAPL',
        //               type: 'line',
        //               data: data2,
        //               gapSize: 5,
        //               tooltip: {
        //                   valueDecimals: 2
        //               },
        //               fillColor: {
        //                   linearGradient: {
        //                       x1: 0,
        //                       y1: 0,
        //                       x2: 0,
        //                       y2: 1
        //                   },
        //                   stops: [
        //                       [0, Highcharts.getOptions().colors[0]]
        //                   ]
        //               }},
        //       ]
        //     };
        // });
        //  this.StockQuote = this.detailservice.getStockInfo();
        //     this.chartOptions= {
        //       rangeSelector: {
        //         selected: 2
        //       },
        //       yAxis: {
        //         labels: {
        //             formatter: function () {
        //                 return (this.value > 0 ? ' + ' : '') + this.value + '%';
        //             }
        //         },
        //         plotLines: [{
        //             value: 0,
        //             width: 2,
        //             color: 'silver'
        //         }]
        //     },
        //     plotOptions: {
        //       series: {
        //           showInNavigator: true
        //       }
        //   },
        //   tooltip: {
        //     pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        //     valueDecimals: 2,
        //     split: true
        // },
        //       title: {
        //         text: this.StockQuote.symbol  + ' Stock Chart'
        //       },
        //       series:seriesOptions
        //   };
    };
    DetailComponent.prototype.getColor = function (percent) {
        if (percent.toString().includes("-")) {
            return 'red';
        }
        else {
            return 'green';
        }
    };
    DetailComponent = __decorate([
        Component({
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./detail.component.css']
        }),
        __metadata("design:paramtypes", [DetailstockService])
    ], DetailComponent);
    return DetailComponent;
}());
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map