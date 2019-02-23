import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailstockService {
symbol:string;

  constructor() { }

 getDetails(symbol:string)
 {
   console.log(symbol,"Works");
 }
  setSymbol(symbol:string)
  {
    this.symbol = symbol;
  }

  getSymbol()
  {
    return this.symbol;
  }
}
