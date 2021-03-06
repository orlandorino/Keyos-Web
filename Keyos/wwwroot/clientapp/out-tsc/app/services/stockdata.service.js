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
import { HttpClient, HttpHeaders } from '@angular/common/http';
var StockdataService = /** @class */ (function () {
    function StockdataService(http) {
        this.http = http;
    }
    StockdataService.prototype.getStockData = function () {
        var headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
        return this.http.get("http://localhost:5000/api/Stocks?stockID=msft", { headers: headers });
    };
    StockdataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], StockdataService);
    return StockdataService;
}());
export { StockdataService };
//# sourceMappingURL=stockdata.service.js.map