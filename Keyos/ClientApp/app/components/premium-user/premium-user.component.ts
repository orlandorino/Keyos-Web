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
  chartOptions2: any;
  loadingBuySell = true;
  loadingForecast = true;
  forecastedData =[];

  constructor(private detailservice:DetailstockService) { }

  ngOnInit() {
this.detailservice.GetForecastedData().subscribe (t =>{
          t.forEach(element => {
            console.log("testtttsts",element);
            var arr = [Number(element.date),element.price];
            this.forecastedData.push(arr)    });
            this.loadingForecast = false;
    });

  let buysell = [];
  let dates =[];
  this.detailservice.GetBuySellInitial().subscribe(data => 
    {
      console.log("biy",data)
      data.forEach(element => {
        
        if(element.buySell == "false") {  
          var arr = {
            y: element.price,
            marker: {
               symbol: 'url(https://i.imgur.com/6yzuxv0.png)'
            }
         };
       } else {
        var arr = {
          y: element.price,
          marker: {
             symbol: 'url(https://i.imgur.com/8JtH3Ax.png)'
          }
       }; 
       }
       
       dates.push(element.dateNonEpoch);
       
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
          categories:dates
       },
        series: [
          {
            name: 'BUY',
            marker: {
               symbol: 'url(https://i.imgur.com/8JtH3Ax.png)'
            },
            data:buysell
         },
         {
          name: 'SELL',
          marker: {
             symbol:  'url(https://i.imgur.com/6yzuxv0.png)'
          },
          data:buysell
       },
        ]
     };
    }
  );
        this.loadingBuySell = false;
  
  }
}











