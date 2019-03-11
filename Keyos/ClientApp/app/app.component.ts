import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private jwtHelper: JwtHelper, private router: Router) { }

  ngOnInit() {
    this.isUserAuthenticated();
  }
  isUserAuthenticated() {
    let token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
     this.router.navigate(["/dashboard/home"]);
    }
    else {
      console.log("test")
     this.router.navigate(["/welcome"]);
    }
  }

}