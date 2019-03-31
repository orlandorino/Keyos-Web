import { Component, OnInit } from '@angular/core';
import { DetailstockService } from '../../../../../../services/detailstock.service';
import { CompanyInfo, StockStats, StockSummary, Quote } from '../../../../../../models/StockSummary';

@Component({
  selector: 'app-stocksummary',
  templateUrl: './stocksummary.component.html',
  styleUrls: ['./stocksummary.component.css']
})
export class StocksummaryComponent implements OnInit {

  
  CompanyInfo:CompanyInfo = {description: "General Electric Co is a digital industrial company. It operates in various segments, including power and water, oil and gas, energy management, aviation, healthcare, transportation, appliances and lighting, and more."
  ,exchange:"New York Stock Exchange",sector:"Industrials",industry:"Industrial Products"};
  
  CompanyStats:StockStats = {float:8600000000,sharesOutstanding:8600000000,week52low:6.66,week52high:15.59,marketcap:88460000000,beta:0.988,latestEPS:-2.62,latestEPSDate:new Date(12312018),dividendRate:0.04,dividendYield:0.393,exDividendDate:new Date(3082019)};
  
  StockQuote:Quote ={symbol: "AAPL", companyName: "Apple Inc.",latestPrice:172.97,  sector: "Technology"
  ,change: 1.91,changePercent: 0.01117
  ,marketCap:815601981600
  ,avgTotalVolume:29259479
  ,latestVolume: 18737202
  ,peRatio:14.57,
  latestSource: "Close",
  latestTime:"February 22, 2019",
  open:104

        , previousClose: 10.4
    };
    loading = true;

  constructor(private detailstock:DetailstockService) { }

  ngOnInit() {

    // if IEX api is being use comment out to not waste api calls 

      this.detailstock.getStockCompanyInfo().subscribe( val =>{this.CompanyInfo = val
          console.log(this.CompanyInfo, "test")
          this.loading = false;
      });
      this.detailstock.getStockStats().subscribe(val1 => {this.CompanyStats = val1
        console.log(this.CompanyStats)
      });
      this.StockQuote = this.detailstock.getStockInfo();
  
  }

}
