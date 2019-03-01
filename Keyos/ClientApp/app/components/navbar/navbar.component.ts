import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  checkAuth() {
      return this.auth.isUserAuthenticated();
  }
}
