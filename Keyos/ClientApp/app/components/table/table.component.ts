import { Component, OnInit, ViewChild } from '@angular/core';
import {StockSummary,Quote} from '../../models/StockSummary';
import { StocksummaryService } from '../../services/stocksummary.service';
import { DataSource } from '@angular/cdk/table';
import { Observable, merge } from 'rxjs';
import {MatPaginator, MatSort} from '@angular/material';
import { detachEmbeddedView } from '@angular/core/src/view';
const deh:Quote[] = [
{symbol: "AABA", companyName: "Altaba Inc.",  sector: "Financial Services",change: -0.76,changePercent: -1.1079999999999999 },
{symbol: "AAPL", companyName: "Apple Inc.", sector: "Technology",change: 0.76,changePercent: 1.1079999999999999} ];




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['symbol','CompanyName','LatestPrice','PercentChange','avgTotalVolume','marketCap'];
  quote:Quote[] = [];
  dataSource = new QuoteDataSource(this.stocksummary);
  icon: string;
  constructor(private stocksummary:StocksummaryService) { }

  ngOnInit() {


    // this.stocksummary.getStocks().subscribe(t => {
    // this.quote = t;
    //    console.log(this.quote);
    //  });   

  }

  getColor(percent:string) {   
    if (percent.toString().includes("-"))
    {
      this.icon = 'arrow_downward'
      return  'red';
    }else{
      this.icon = 'arrow_upward'
      return 'green';
    }
        
}
}

export class QuoteDataSource extends DataSource<any> {
  constructor(private stocksummary:StocksummaryService)
  {
    super();
  }
  connect(): Observable<Quote[]>
  {
    return this.stocksummary.getStocks();
  }

  disconnect(){}
}

