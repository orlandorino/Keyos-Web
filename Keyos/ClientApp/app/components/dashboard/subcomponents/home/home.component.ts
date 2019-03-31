import { Component, OnInit } from '@angular/core';
import { StockdataService } from 'ClientApp/app/services/stockdata.service';
import { StockModel } from 'ClientApp/app/models/StockModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr: StockModel[] = [];
  arr1: any[] = [];
  loaded:boolean = false;
  constructor(private stockData: StockdataService) { }

  ngOnInit() {
  
    this.stockData.getStockData().subscribe(t => {
      this.arr = t as StockModel[];
      this.arr.forEach(data => { this.arr1.push([Number(data.date), data.high]) });
      this.loaded = true;
  });
  }

}
