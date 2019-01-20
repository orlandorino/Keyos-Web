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
import { Router } from '@angular/router';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    };
    AuthGuardService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [JwtHelper, Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map