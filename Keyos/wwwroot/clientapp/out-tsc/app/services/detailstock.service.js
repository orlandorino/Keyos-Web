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
import { HttpClient } from '@angular/common/http';
var DetailstockService = /** @class */ (function () {
    function DetailstockService(http) {
        this.http = http;
    }
    DetailstockService.prototype.setStockInfo = function (stock) {
        this.stock = stock;
        this.symbol = stock.symbol;
    };
    DetailstockService.prototype.getStockInfo = function () {
        return this.stock;
    };
    DetailstockService.prototype.getStockStats = function () {
        return this.http.get("https://api.iextrading.com/1.0/stock/" + this.symbol + "/stats");
    };
    DetailstockService.prototype.getStockCompanyInfo = function () {
        return this.http.get("https://api.iextrading.com/1.0/stock/" + this.symbol + "/company");
    };
    DetailstockService.prototype.getStockHistory = function () {
        return this.http.get("https://api.iextrading.com/1.0/stock/" + this.symbol + "/chart/1y");
    };
    DetailstockService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DetailstockService);
    return DetailstockService;
}());
export { DetailstockService };
//# sourceMappingURL=detailstock.service.js.map