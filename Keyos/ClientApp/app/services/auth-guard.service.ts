import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private jwtHelper: JwtHelper, private router: Router) {
  }
  
  canActivate() {
    var token = localStorage.getItem("jwt");
 
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
