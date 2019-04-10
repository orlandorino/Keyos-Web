import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
        @Input() chartData:any[];
        @Input() chartData2:any[];
        @Input() chartType:string;
        @Input() Dates:any[];
        @Input() Company:string;
    constructor(private stockData: StockdataService, private http: HttpClient) { }

   
    Highcharts = Highcharts;
    loading = true;

    chartConstructor = 'stockChart';
    chartOptions: any;
    public apps: StockModel[];
    ngOnInit() {

        this.DetermineChartFormat(this.chartType);
       
    }
    DetermineChartFormat(formatName:string)
    {
        switch(formatName)
        {
            case "dashboard":
            {
            
        this.chartOptions = {
            title: {
                text: "Dow Jones Industrial Average"
              }, 
            series: [{
                name: 'DJI',
                type: 'area',
                data: this.chartData,
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
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]

                },
                threshold: null
            }]
        };
        break;
            }
            case "Historical":
            {
                this.chartOptions = {
                   
                    series: [{
                        name: this.Company,
                        type: 'line',
                        data: this.chartData,
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
                            
                        }},
                        // {
                        //   name: 'AAPL',
                        //   type: 'line',
                        //   data: data2,
                        //   gapSize: 5,
                        //   tooltip: {
                        //       valueDecimals: 2
                        //   },
                        //   fillColor: {
                        //       linearGradient: {
                        //           x1: 0,
                        //           y1: 0,
                        //           x2: 0,
                        //           y2: 1
                        //       },
            
                        //       stops: [
                        //           [0, Highcharts.getOptions().colors[0]]
                        //       ]
            
                        //   }},
                        
                  ]
                    };
                    break;
            }
            case "Forecast":
            {
                this.chartOptions = {
                    title: {
                      text: "Forecast"
                    }, 
                    
              navigator: {
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
           
                    rangeSelector: {
                      selected: 1
                  },xAxis: {
                    type: 'datetime'
                },
                    series: [{
                        name: this.Company,
                        data: this.chartData,  type: 'spline',
                        tooltip: {
                            valueDecimals: 2
                        }}]
                      };
                break;
            }
            case "BuySell":
            {
                this.chartOptions = {   
                    chart: {
                       type: "spline"
                    },
                    title: {
                       text: "Buy/Sell Chart"
                    },
                    tooltip: {
                      valueDecimals: 2
                    },
                    navigator: {
                        enabled: false
                    },
                    scrollbar: {
                        enabled: false
                    },
                    xAxis:{
                      data:this.Dates
                   },
                    series: [
                      {
                        name: this.Company,
                        marker: {
                           symbol: 'square'
                        },
                        data:this.chartData
                     },
                    ]
                 };
                break;
            }
            case "PastAccuracy":
            {
                this.chartOptions = {
                    xAxis: {
                      type: 'datetime'
                  },
                    series: [{
                        name: 'Forcasted',
                       
                        type: 'line',
                        data: this.chartData,
                        gapSize: 5,
                        tooltip: {
                            valueDecimals: 2
                        },
                        },
                        {
                          name: 'Actual',
                          type: 'line',
                          data: this.chartData2,
                          gapSize: 5,
                          tooltip: {
                              valueDecimals: 2
                          },
                          },
                          
                        
                  ]
                };
            }
        }
    }
}
