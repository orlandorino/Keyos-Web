import { Component, OnInit } from '@angular/core';
import { StockTable } from '../../models/StockModel';
import * as Highcharts from 'highcharts/highstock';
import { DetailstockService } from '../../services/detailstock.service';
import { BuySell } from '../../models/StockSummary';
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
 chartOptions2:any;

 

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
          var arr = [Number(element.date),element.price];
          // var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
          data.push(arr);
  

          // data2.push(arr1);
        });
        this.chartOptions = {
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
              }},
            ]
      };
  });
let buysell = [];
let dates =[];
this.detailservice.GetBuySellInitial().subscribe(data => 
  {
    data.forEach(element => {
      var arr = {
        y: element.price,
        marker: {
           symbol: 'url(https://i.imgur.com/8JtH3Ax.png)'
        }
     };
     dates.push(element.date)
     
      buysell.push(arr);
   
    });
    this.chartOptions2 = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Buy/Sell Chart"
      },
      tooltip: {
        valueDecimals: 2
      },
      xAxis:{
        date:dates
     },
      series: [
        {
          name: 'AAPL',
          marker: {
             symbol: 'square'
          },
          data:buysell
       },
      ]
   };
  }
);
  

  }
}
