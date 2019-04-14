import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isExpanded = false;
  element: HTMLElement;
  loading = true;
  toggleActive(event:any){
    debugger;
    event.preventDefault();
    if(this.element !== undefined){
      this.element.style.backgroundColor = "white";
    } 
    var target = event.currentTarget;
    target.style.backgroundColor = "#e51282";
    this.element = target;
  }
    constructor(private router:Router) {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
     }


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
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => { // here
          this.loading = false;
        }, 2000);
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        setTimeout(() => { // here
          this.loading = false;
        }, 2000);
      }
      if (event instanceof NavigationError) {
        setTimeout(() => { // here
          this.loading = false;
        }, 2000);
      }
    }

}
