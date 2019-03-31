import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Util/material.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/dashboard/subcomponents/header/header.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import {MillionPipe} from './pipes/MillionPipe';
import { DetailComponent } from './components/dashboard/subcomponents/detail/detail.component';
import { HomeComponent } from './components/dashboard/subcomponents/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { StocksummaryComponent } from './components/dashboard/subcomponents/detail/subcomponents/stocksummary/stocksummary.component';
import { BillionPipe } from './pipes/billion.pipe';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { PremiumUserComponent } from './components/premium-user/premium-user.component';
import { StocksentimentComponent } from './components/dashboard/subcomponents/detail/subcomponents/stocksentiment/stocksentiment.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PortfolioaccuracyComponent } from './components/dashboard/subcomponents/detail/subcomponents/portfolioaccuracy/portfolioaccuracy.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    HeaderComponent,
    ChartComponent,
    TableComponent,
    MillionPipe,
    DetailComponent,
    HomeComponent,
    StocksummaryComponent,
    BillionPipe,
    PaymentRequestComponent,
    PremiumUserComponent,
    StocksentimentComponent,
    TestcomponentComponent,
    PortfolioaccuracyComponent
  
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      FlexLayoutModule,
      HighchartsChartModule
  ],
  providers: [JwtHelper,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
