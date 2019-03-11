import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { fromStringWithSourceMap } from 'source-list-map';
import { PaymentService } from '../services/payment.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss']
})
export class PaymentRequestComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  elements: any;
  paymentRequest: any;
  prButton: any;

  model = new User('','','');

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  Submitted:boolean = false;
  Success:boolean = false;
  IsError:boolean = false;

  constructor(private cd: ChangeDetectorRef,private payment:PaymentService,private router:Router,private Auth:AuthService) { }

  ngAfterViewInit() {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
    this.card = elements.create('card',{style});
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);

  }

  ngOnDestroy() {
      this.card.removeEventListener('change', this.cardHandler);
      console.log("destroy");
    this.card.destroy();
  }
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
  async onSubmit(form: NgForm) {
    this.Submitted = true;
    const { token, error } = await stripe.createToken(this.card, {
      email: this.model.email,
      name:this.model.name,
    });
  
    if (error) {
      this.Submitted = false;
      this.IsError = true;
    
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      this.Submitted = true;
     // this.Success = true;
     
    
     // Processing charge in backend
      this.payment.SendToken(token).subscribe(response =>
        
        {
          this.Success = true;
          this.Auth.UserRole = 'PremiumUser';
        }),err =>{
          this.IsError = true;
          console.log(err);
        };
  } 
}
}
