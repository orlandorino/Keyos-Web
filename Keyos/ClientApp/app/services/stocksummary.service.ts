import { Injectable } from '@angular/core';
import {merge, Observable, of as observableOf, forkJoin} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StockSummary,Quote, GlobalQuote, Dataset} from '../models/StockSummary';
import { map } from 'rxjs/operators';
import {formatDate } from '@angular/common';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StocksummaryService {
  quote:Quote[] = [];

  constructor(private http:HttpClient) { }

  getStocks():Observable<Quote[]> {
    return this.http.get<Quote>("https://api.iextrading.com/1.0/stock/market/batch?symbols=AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP&types=quote&displayPercent=true")
    .pipe(map(data => {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          this.quote.push(data[key]["quote"]);
        }
      }
      return this.quote;
    }));
  }

  getStockIndices()
  {
    
    let today = new Date();
    let week = new Date();
    week.setDate(week.getDate()-7);
   
    let format = formatDate(week, "yyyy-MM-dd", 'en-US');
    let format1 = formatDate(today, "yyyy-MM-dd", 'en-US');

    let nsdqUrl:string = 'https://www.quandl.com/api/v3/datasets/NASDAQOMX/COMP.json?';
    let params = 'start_date=' + format + '&' + 'end_date=' + format1 + '&column_index=1&api_key=TAX7gBfuCSSCE8zy93Lj'
    let sto1 = this.http.get<GlobalQuote>("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=dji&apikey=V64WLHT0MXEV21MT");
    let sto2 =  this.http.get<GlobalQuote>("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=inx&apikey=V64WLHT0MXEV21MT");
    
    console.log(`${nsdqUrl}${params}`);

    let sto3 =   this.http.get<Dataset>(`${nsdqUrl}${params}`);
  
    return forkJoin([sto1,sto2,sto3])
  }
  }
