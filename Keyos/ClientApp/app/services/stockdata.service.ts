import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockModel } from '../models/StockModel';
import { merge, Observable, of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {

    constructor(private http: HttpClient) { }

    getStockData(): Observable<StockModel[]> {
        return this.http.get<StockModel[]>("http://localhost:5000/api/Stocks?stockID=msft");
    }

}
