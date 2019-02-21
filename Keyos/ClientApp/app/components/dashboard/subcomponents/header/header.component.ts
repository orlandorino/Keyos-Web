import { Component, OnInit } from '@angular/core';
import { StocksummaryService } from '../../../../services/stocksummary.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arr:any[] =[];

  constructor(private indexes:StocksummaryService) { }

  
  
  
  ngOnInit() {
      
      this.indexes.getStockIndices().subscribe(x => {
      let sym = x[0]["Global Quote"]["01. symbol"];
      let price  = x[0]["Global Quote"]["05. price"]
      let change = x[0]["Global Quote"]["09. change"];

      let changeper = x[0]["Global Quote"]["10. change percent"];

      let sym2 = ".INX"
      let price2  = x[1]["Global Quote"]["05. price"]
      let change2 = x[1]["Global Quote"]["09. change"];
      let changeper2 = x[1]["Global Quote"]["10. change percent"];

    

      let IXICprice = x[2]["dataset"].data[0][1];
      let IXICchange = x[2]["dataset"].data[0][1] - x[2]["dataset"].data[1][1];
      let IXICpercent = (IXICchange/ x[2]["dataset"].data[1][1] * 100).toFixed(2) + '%';

      let vals = {Symbol:sym,price:price,
      change:change,changepercent:changeper,market:"Dow Jones"};
      
      let vals2 = {Symbol:sym2,price:price2,
        change:change2,changepercent:changeper2,market:"S&P 500"};

      let vals3 = {Symbol:"^IXIC",price:IXICprice,
        change:IXICchange,changepercent:IXICpercent,market:"Nasdaq Composite"};
         
      this.arr.push(vals,vals2,vals3);
    });
  }

}
