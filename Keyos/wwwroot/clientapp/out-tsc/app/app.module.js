var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Util/material.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/dashboard/subcomponents/header/header.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { MillionPipe } from './pipes/MillionPipe';
import { DetailComponent } from './components/dashboard/subcomponents/detail/detail.component';
import { HomeComponent } from './components/dashboard/subcomponents/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { StocksummaryComponent } from './components/dashboard/subcomponents/detail/subcomponents/stocksummary/stocksummary.component';
import { BillionPipe } from './pipes/billion.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                BillionPipe
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
            providers: [JwtHelper, AuthGuard],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map