import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Util/material.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent
  
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      FlexLayoutModule
  ],
  providers: [JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
