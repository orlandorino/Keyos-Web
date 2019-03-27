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
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import * as jwt_decode from "jwt-decode";
import { element } from '@angular/core/src/render3';

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
  token: string = localStorage.getItem("jwt");
  UserRole ='';
  loading = true;
  loaded = false;
  loadedHistoricalForecast=false;
  loadedActual = false;
  constructor(private detailservice:DetailstockService,private router:Router,private auth:AuthService) { }
  BuyOrSell:string = '';
   data = [];
   data2 = [];
   historicalForecastData = [];
   historicalActual=[];
   PastAccuracyLoaded = false;
  


  ngOnInit() {
    let jwtToken = jwt_decode(this.token);
    this.UserRole = jwtToken.role; 

      if (this.UserRole == 'PremiumUser') {
          this.detailservice.GetBuySellLatest().subscribe(x => {
              console.log("aaaa", x);
              if (x.buySell == "true") {
                  this.BuyOrSell = "BUY"
              } else {
                  this.BuyOrSell = "SELL"
              }
          });
          this.detailservice.GetBuySellInitial().subscribe(x => {

              console.log(x)
          })
      }
       this.detailservice.getStockHistory().subscribe (t =>{
        this.Chart = t;
        this.dataSource = this.Chart;
        
        this.dataSource.forEach(element => {
          var arr = [new Date(element.date).getTime(),element.close];
          var arr1 = [new Date(element.date).getTime(),element.close * 2];
          this.data.push(arr);
          this.data2.push(arr1);

        });
          this.loading = false;
          this.loaded = true;
  });

  this.detailservice.GetForecastedHistory().subscribe(t=>
    {
      console.log(t);
      t.forEach(element =>{
        var arr = [new Date(element.date).getTime(),element.price];
        this.historicalForecastData.push(arr);
        
      })
      this.loadedHistoricalForecast = true;
      console.log("forecast",this.historicalForecastData);
    });

    this.detailservice.GetActualHistoricalData().subscribe(t=>{
      console.log("dat1",t)
      t.forEach(element => {
        let arr = [new Date(element.date).getTime(),element.close]

        this.historicalActual.push(arr);
       
      })
      this.loadedActual = true;
      
    })

      
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
OnClick()
{
  this.router.navigate(["dashboard/payment"]);
}
}