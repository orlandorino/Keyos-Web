import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockModel } from '../models/StockModel';
import { merge, Observable, of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {

 
    constructor(private http: HttpClient) { }

    getStockData(): Observable<StockModel[]> {
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
        return this.http.get<StockModel[]>("http://localhost:5000/api/Stocks?stockID=msft", { headers });
    }

}
