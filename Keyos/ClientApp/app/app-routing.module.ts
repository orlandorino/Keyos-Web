import { NgModule, Component }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {DetailComponent} from './components/dashboard/subcomponents/detail/detail.component';
import { HomeComponent } from './components/dashboard/subcomponents/home/home.component';
import { AuthGuard} from './services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'welcome', component: NavbarComponent },
    {path:'payment',component:PaymentRequestComponent},
    { path: 'dashboard', component: DashboardComponent, children: [{ path: 'home', component: HomeComponent },{ path: 'detail', component: DetailComponent},{path:'payment',component:PaymentRequestComponent}], canActivate:[AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}