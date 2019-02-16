import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

import HC_exporting from 'highcharts/modules/exporting';
import DarkUnicaTheme from 'highcharts/themes/sunset';
import StockModule from 'highcharts/modules/stock';
import { StockdataService } from 'ClientApp/app/services/stockdata.service';
import { Response } from '@angular/http';
import { StockModel } from 'ClientApp/app/services/StockModel';
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

    chartConstructor = 'stockChart';
    chartOptions: any;
    public apps: StockModel[];
    ngOnInit() {



        this.stockData.getStockData().subscribe(t => {
            this.arr = t as StockModel[];
            //console.log(this.arr);

            //this.arr.forEach(data => { console.log(data.date) });
            //{ Date:"",}

            this.arr.forEach(data => { this.arr1.push([Number(data.date), data.high]) });

            //pricesList.push([3234234, 32.43])
            //pricesList.push([3234234, 32.43])

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



    }





}
