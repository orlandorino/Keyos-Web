import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockStats, CompanyInfo, Quote, ForecastedData, BuySell,SentimentPercentage,SentimentMessage } from '../models/StockSummary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockTable, Portfolio } from '../models/StockModel';
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
    return this.http.get<CompanyInfo>("https://api.iextrading.com/1.0/stock/" +this.symbol + "/company");
  }

  getStockHistory():Observable<StockTable[]>
  {
    return this.http.get<StockTable[]>("https://api.iextrading.com/1.0/stock/"+ this.symbol +"/chart/1y");
  }

  GetBuySellInitial(): Observable<BuySell[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
    return this.http.get<BuySell[]>("http://localhost:5000/api/buySell/buySellList?stockID="+this.symbol, { headers });
  }

  GetBuySellLatest(): Observable<BuySell> {
  let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
  return this.http.get<BuySell>("http://localhost:5000/api/buySell/buySellLatest?stockID="+this.symbol, { headers });
  }
  GetForecastedHistory():Observable<ForecastedData[]>
  {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
    return this.http.get<ForecastedData[]>("http://localhost:5000/api/buySell/forecastAccuracyList?stockID="+this.symbol, { headers });
  }
  GetForecastedData(): Observable<ForecastedData[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
    return this.http.get<ForecastedData[]>("http://localhost:5000/api/buySell/forecastList?stockID="+this.symbol, { headers });
    }

  GetSentimentPercentageData(): Observable<SentimentPercentage[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
    return this.http.get<SentimentPercentage[]>("http://localhost:5000/api/sentiment/sentimentPercentage?stockID="+this.symbol, { headers });
    }
      GetSentimentMessageData(): Observable<SentimentMessage[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
    return this.http.get<SentimentMessage[]>("http://localhost:5000/api/sentiment/SentimentMessage?stockID="+this.symbol, { headers });
      }
    GetActualHistoricalData():Observable<StockTable[]>
    {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
      return this.http.get<ForecastedData[]>("http://localhost:5000/api/buySell/stocksNotEpoch?stockID="+this.symbol, { headers });
    }
    GetActualHistoricalPortfolio():Observable<Portfolio[]>
    {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
      return this.http.get<ForecastedData[]>("http://localhost:5000/api/historicalPortfolio/histPortfolio?stockID="+this.symbol, { headers });
    }
}
