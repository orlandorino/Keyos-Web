import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private router:Router) { }


    ngOnInit() {
    this.router.navigate(["/dashboard/home"]);
    }
  
    goToDashboard()
    {
    this.router.navigate(["/dashboard/home"]);
    }

    logout() 
    {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt');
    location.reload();
    }

}
