import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  hide1 = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    console.log(credentials);
    this.http.post("http://localhost:5000/api/auth/register", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      this.router.navigate(["/login"]);
    }, err => {
     console.log("Err")
    });
    
  }
  getErrorMessage() {
    console.log(this.email);
    return  this.email.hasError('email') ? 'Not a valid email': this.email.hasError('required') ? 'You must enter a valid email'
        :'';
  }

}
