import { Component, OnInit } from '@angular/core';
import { StockTable } from '../../models/StockModel';
import * as Highcharts from 'highcharts/highstock';
import { DetailstockService } from '../../services/detailstock.service';
@Component({
  selector: 'app-premium-user',
  templateUrl: './premium-user.component.html',
  styleUrls: ['./premium-user.component.css']
})
export class PremiumUserComponent implements OnInit {
  highcharts = Highcharts;
  displayedColumns: string[] = ['date', 'open', 'high', 'low','close' ];
  Chart:StockTable[] = [];
  dataSource = this.Chart;
  //chartConstructor = 'stockChart';
 chartOptions: any;

 

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

        this.detailservice.GetForecastedData().subscribe (t =>{

        let data = [];
          // let data2 = [];
        t.forEach(element => {
          var arr = [element.date,element.price];
          // var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
          data.push(arr);
          // data2.push(arr1);
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
              title: {
                text: "Forecast"
            }, 
              fillColor: {
                  stops: [
                      [0, Highcharts.getOptions().colors[0]]
                  ]
              }},   
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
  }
}
