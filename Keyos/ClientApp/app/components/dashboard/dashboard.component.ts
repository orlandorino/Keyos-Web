import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isExpanded = false;
  element: HTMLElement;

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
