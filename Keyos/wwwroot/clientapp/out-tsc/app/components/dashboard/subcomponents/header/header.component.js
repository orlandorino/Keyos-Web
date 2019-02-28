var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StocksummaryService } from '../../../../services/stocksummary.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(indexes) {
        this.indexes = indexes;
        this.arr = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.indexes.getStockIndices().subscribe(function (x) {
            var sym = x[0]["Global Quote"]["01. symbol"];
            var price = x[0]["Global Quote"]["05. price"];
            var change = x[0]["Global Quote"]["09. change"];
            var changeper = x[0]["Global Quote"]["10. change percent"];
            var sym2 = ".INX";
            var price2 = x[1]["Global Quote"]["05. price"];
            var change2 = x[1]["Global Quote"]["09. change"];
            var changeper2 = x[1]["Global Quote"]["10. change percent"];
            var IXICprice = x[2]["dataset"].data[0][1];
            var IXICchange = x[2]["dataset"].data[0][1] - x[2]["dataset"].data[1][1];
            var IXICpercent = (IXICchange / x[2]["dataset"].data[1][1] * 100).toFixed(2) + '%';
            var vals = { Symbol: sym, price: price,
                change: change, changepercent: changeper, market: "Dow Jones" };
            var vals2 = { Symbol: sym2, price: price2,
                change: change2, changepercent: changeper2, market: "S&P 500" };
            var vals3 = { Symbol: "^IXIC", price: IXICprice,
                change: IXICchange, changepercent: IXICpercent, market: "Nasdaq Composite" };
            _this.arr.push(vals, vals2, vals3);
        });
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [StocksummaryService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map