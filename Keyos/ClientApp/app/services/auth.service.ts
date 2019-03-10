import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = localStorage.getItem("jwt");
  UserRole = 'User';
  constructor(private jwtHelper: JwtHelper) { }


  
  isUserAuthenticated() {
  
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      return true;
    }
    else {
      return false;
    }
  }

  getDecodedAccessToken(): any {
    try{
      console.log(jwt_decode(this.token));
        return jwt_decode(this.token);
    }
    catch(Error){
        return null;
    }
  }
}
