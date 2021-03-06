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
var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
    }
    PaymentService.prototype.SendToken = function (token) {
        var credentials = JSON.stringify(token);
        var headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
        return this.http.post("http://localhost:5000/api/user/processpayment", credentials, {
            headers: headers
        });
    };
    PaymentService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], PaymentService);
    return PaymentService;
}());
export { PaymentService };
//# sourceMappingURL=payment.service.js.map