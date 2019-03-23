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
 

  constructor(private detailservice:DetailstockService) { }

  ngOnInit() {
this.detailservice.GetForecastedData().subscribe (t =>{

          let data = [];
            // let data2 = [];
          t.forEach(element => {
            console.log("testtttsts",element);
            var arr = [Number(element.date),element.price];
            // var arr1 = [new Date(element.date).getTime() / 1000,element.close * 2];
            data.push(arr);
    
  
            // data2.push(arr1);
          });
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
                name: 'AAPL',
                data: data,  type: 'spline',
                tooltip: {
                    valueDecimals: 2
                }}]
              };
              this.loadingForecast = false;
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
          categories:dates
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
        this.loadingBuySell = false;
  
  }
}











