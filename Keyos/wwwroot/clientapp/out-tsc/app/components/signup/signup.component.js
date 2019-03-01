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
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, http) {
        this.router = router;
        this.http = http;
        this.hide = true;
        this.hide1 = true;
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.username = new FormControl('', [Validators.required, Validators.email]);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.register = function (form) {
        var _this = this;
        var credentials = JSON.stringify(form.value);
        console.log(credentials);
        this.http.post("http://localhost:5000/api/auth/register", credentials, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        }).subscribe(function (response) {
            _this.router.navigate(["/login"]);
        }, function (err) {
            console.log("Err");
        });
    };
    SignupComponent.prototype.getErrorMessage = function () {
        console.log(this.email);
        return this.email.hasError('email') ? 'Not a valid email' : this.email.hasError('required') ? 'You must enter a valid email'
            : '';
    };
    var _a, _b;
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object, typeof (_b = typeof HttpClient !== "undefined" && HttpClient) === "function" ? _b : Object])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map