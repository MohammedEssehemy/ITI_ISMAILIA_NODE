import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { User } from "./../models/user";
import {environment} from './../../environments/environment';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  registerUser(user: User){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(`${environment.baseUrl}/api/user`,user, {headers})
    .map(res=>res.json());
  }

  authenticateUser(user: User){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post(`${environment.baseUrl}/api/user/login`,user, {headers})
    .map(res=>res.json());
  }


  storeToken(token) {
    localStorage.setItem('token', token);
  }


  getToken() {
    return localStorage.getItem('token');
  }

}
