import { Injectable } from '@angular/core';
// import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myObservable: any;

  constructor(private http: HttpClient) { }

  login(formvalue) {
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'userName': formvalue.username,
    'password': formvalue.password
  })
};

return this.http.post('http://localhost:9084/login', {}, httpOptions);
  }
}
