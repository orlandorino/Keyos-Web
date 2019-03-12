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
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt')).append('Content-Type', 'application/json').append('Access-Control-Allow-Origin', 'https://localhost:5000');
   return this.http.post("http://localhost:5000/api/user/processpayment", credentials, {
      headers: headers
    });
  }
}
