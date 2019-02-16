import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockModel } from './StockModel';
import { merge, Observable, of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockdataService {

    constructor(private http: HttpClient) { }

    getStockData(): Observable<any> {
        return this.http.get<StockModel>("http://localhost:5000/api/Stocks");
        //.pipe(map(data => {
        //    console.log(data.high);
        //    return daa;
        //}));
    }

}
