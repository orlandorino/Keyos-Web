import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private http:HttpClient) { }


  SendToken(token: any):Observable<any> {
    let credentials = JSON.stringify(token);
   return this.http.post("http://localhost:5000/api/user/processpayment", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
