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
import { JwtHelper } from 'angular2-jwt';
import * as jwt_decode from "jwt-decode";
var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.token = localStorage.getItem("jwt");
        this.UserRole = 'User';
    }
    AuthService.prototype.isUserAuthenticated = function () {
        if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getDecodedAccessToken = function () {
        try {
            console.log(jwt_decode(this.token));
            return jwt_decode(this.token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [JwtHelper])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map