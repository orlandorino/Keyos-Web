var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var StocksummaryService = /** @class */ (function () {
    function StocksummaryService(http) {
        this.http = http;
        this.quote = [];
    }
    StocksummaryService.prototype.getStocks = function () {
        var _this = this;
        return this.http.get("https://api.iextrading.com/1.0/stock/market/batch?symbols=AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP,AABA,AAPL,ABBV,ADBE,AMAT,AMD,AMGN,AMZN,AVGO,BA,BABA,BAC,BIDU,BRK-B,C,CAT,CELG,CMCSA,CRM,CSCO,CVS,CVX,DIA,DIS,DWDP,EEM,EFA,EWJ,EWZ,FB,FXI,GDX,GE,GLD,GOOG,GOOGL,GS,HD,HYG,IBM,IEMG,INTC,IVV,IWM,IYR,JNJ,JPM,KO,LMT,LOW,LQD,LRCX,MA,MCD,MMM,MRK,MS,MSFT,MU,NFLX,NVDA,NXPI,ORCL,PFE,PG,PM,PYPL,QCOM,QQQ,SMH,SPOT,SPY,SQ,T,TLT,TQQQ,TSLA,TWTR,TXN,UNH,UNP,UTX,V,VOO,VWO,VXX,VZ,WFC,WMT,WYNN,XLE,XLF,XLI,XLK,XLP,XLU,XLV,XLY,XOM,XOP&types=quote&displayPercent=true")
            .pipe(map(function (data) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    _this.quote.push(data[key]["quote"]);
                }
            }
            return _this.quote;
        }));
    };
    StocksummaryService.prototype.getStockIndices = function () {
        var today = new Date();
        var week = new Date();
        week.setDate(week.getDate() - 7);
        var format = formatDate(week, "yyyy-MM-dd", 'en-US');
        var format1 = formatDate(today, "yyyy-MM-dd", 'en-US');
        var nsdqUrl = 'https://www.quandl.com/api/v3/datasets/NASDAQOMX/COMP.json?';
        var params = 'start_date=' + format + '&' + 'end_date=' + format1 + '&column_index=1&api_key=TAX7gBfuCSSCE8zy93Lj';
        var sto1 = this.http.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=dji&apikey=V64WLHT0MXEV21MT");
        var sto2 = this.http.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=inx&apikey=V64WLHT0MXEV21MT");
        console.log("" + nsdqUrl + params);
        var sto3 = this.http.get("" + nsdqUrl + params);
        return forkJoin([sto1, sto2, sto3]);
    };
    var _a;
    StocksummaryService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _a : Object])
    ], StocksummaryService);
    return StocksummaryService;
}());
export { StocksummaryService };
//# sourceMappingURL=stocksummary.service.js.map