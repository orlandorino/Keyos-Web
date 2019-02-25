import { Component, OnInit } from '@angular/core';
import { DetailstockService } from '../../../../services/detailstock.service';
import StockModule from 'highcharts/modules/stock';
import { DataSource } from '@angular/cdk/table';
import { Observable, merge } from 'rxjs';
import * as Highcharts from 'highcharts/highstock';
import { Quote, LatestSource, LatestTime } from '../../../../models/StockSummary';
import { StocksummaryService } from '../../../../services/stocksummary.service';
import { StockTable } from '../../../../models/StockModel';
import { StockdataService } from '../../../../services/stockdata.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  Highcharts = Highcharts;
  displayedColumns: string[] = ['date', 'open', 'high', 'low','close' ];
  Chart:StockTable[] = [];
  dataSource = this.Chart;
  chartConstructor = 'stockChart';
  chartOptions: any;
  StockQuote:Quote = {symbol: "AAPL", companyName: "Apple Inc.",latestPrice:172.97,  sector: "Technology"
  ,change: 1.91,changePercent:-0.01117
  ,marketCap:815601981600
  ,avgTotalVolume:29259479
  ,latestVolume: 18737202
  ,peRatio:14.57,
  latestSource: "Close",
  latestTime:"February 22, 2019"
  ,previousClose:10.4};
  
  constructor(private detailservice:DetailstockService) { }


  ngOnInit() {


    var seriesOptions = [];

    seriesOptions[0] = {
      name:'aapl',
      data: [ [1293580800000, 46.47],
      [1293667200000, 46.24],
      [1293753600000, 46.08]]
    };

    seriesOptions[1] = {
      name:'msft',
      data: [ [1293580800000, 90.47],
      [1293667200000, 100.24],
      [1293753600000, 20.08]]
    };


      this.detailservice.getStockHistory().subscribe (t =>{
        this.Chart = t;
        this.dataSource = this.Chart;
        let data = [];
          let data2 = [];
        this.dataSource.forEach(element => {
          var arr = [new Date(element.date).getTime() / 1000,element.close];
          var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
          data.push(arr);
          data2.push(arr1);

        });

       
        



        this.chartOptions = {

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

              }},
              {
                name: 'AAPL',
                type: 'line',
                data: data2,
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
              
        ]
      };
  });

     

      
   this.StockQuote = this.detailservice.getStockInfo();



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
  
  }
  getColor(percent:string) {   
    if (percent.toString().includes("-"))
    {
      
      return  'red';
    }else{
    
      return 'green';
    }
}
}


