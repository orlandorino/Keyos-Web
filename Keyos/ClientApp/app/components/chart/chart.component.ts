import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

import HC_exporting from 'highcharts/modules/exporting';
import DarkUnicaTheme from 'highcharts/themes/sunset';
import StockModule from 'highcharts/modules/stock';
import { StockdataService } from 'ClientApp/app/services/stockdata.service';
import { Response } from '@angular/http';
import { StockModel } from '../../models/StockModel';
import { HttpClient } from '@angular/common/http';
StockModule(Highcharts);
DarkUnicaTheme(Highcharts);

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    constructor(private stockData: StockdataService, private http: HttpClient) { }

    arr: StockModel[] = [];
    arr1: any[] = [];
    Highcharts = Highcharts;
    loading = true;

    chartConstructor = 'stockChart';
    chartOptions: any;
    public apps: StockModel[];
    ngOnInit() {

        this.stockData.getStockData().subscribe(t => {
            this.arr = t as StockModel[];
      
            this.arr.forEach(data => { this.arr1.push([Number(data.date), data.high]) });


            this.chartOptions = {

                series: [{
                    name: 'AAPL',
                    type: 'area',
                    data: this.arr1,
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
        this.loading = false;
        console.log(this.arr1);
    }
}
