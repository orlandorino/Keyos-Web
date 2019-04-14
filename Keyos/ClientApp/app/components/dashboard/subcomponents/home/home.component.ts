import { Component, OnInit } from '@angular/core';
import { StockdataService } from 'ClientApp/app/services/stockdata.service';
import { StockModel } from 'ClientApp/app/models/StockModel';
import { StocksummaryService } from '../../../../services/stocksummary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr: StockModel[] = [];
  arr1: any[] = [];
  dowArr:any[] =[];
  loaded:boolean = false;
  constructor(private stockData: StockdataService,private summary:StocksummaryService) { }

  ngOnInit() {

    this.summary.getDowTimeSeries().subscribe(data =>{
      // console.log("dow",data["Time Series (Daily)"]  );

      var p = data["Time Series (Daily)"] 
      for (var key in p) {
        if (p.hasOwnProperty(key)) {
            // console.log(key + " -> " + p[key]["4. close"]);
            var d = new Date(key).getTime();
            // console.log([d,Number(p[key]["4. close"])]);
          this.arr1.push([d,Number(p[key]["4. close"])]);
          console.log(this.dowArr);
          this.loaded = true;
        }
      }
      this.dowArr = this.arr1.reverse();
    });
  
  //   this.stockData.getStockData().subscribe(t => {
  //     this.arr = t as StockModel[];
  //     this.arr.forEach(data => { this.arr1.push([Number(data.date), data.high]) });

      
  //     this.loaded = true;
  // });
  }

}
