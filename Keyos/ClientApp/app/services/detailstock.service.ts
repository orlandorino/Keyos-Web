import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockStats, CompanyInfo, Quote } from '../models/StockSummary';
import { HttpClient } from '@angular/common/http';
import { StockTable } from '../models/StockModel';
@Injectable({
  providedIn: 'root'
})
export class DetailstockService {
stock:Quote;
symbol:string;

  constructor(private http: HttpClient) { }

 
  setStockInfo(stock:Quote)
  {
    this.stock = stock;
    this.symbol = stock.symbol;
  }

  getStockInfo()
  {
    return this.stock;
  }

  getStockStats():Observable<StockStats>
  {
    return this.http.get<StockStats>("https://api.iextrading.com/1.0/stock/" +this.symbol + "/stats");
  }
  getStockCompanyInfo():Observable<CompanyInfo>
  {
    return this.http.get<CompanyInfo>("https://api.iextrading.com/1.0/stock/" +this.symbol +"/company");
  }

  getStockHistory():Observable<StockTable[]>
  {
    return this.http.get<StockTable[]>("https://api.iextrading.com/1.0/stock/"+ this.symbol +"/chart/1y");
  }
}
