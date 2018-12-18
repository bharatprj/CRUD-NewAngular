import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const uri = 'http://localhost:8080/api';
const options = { headers: new HttpHeaders() };
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public _http: HttpClient) { }

  signUp = (data) => {
    return this._http.post(`${uri}user/signup`, data, options);
  }

  signIn = (data) => {
    return this._http.get(`${uri}user/signin`, { params: data });
  }

  getUserInfo = (id) => {
    return this._http.get(`${uri}user/info?_id=${id}`);
  }
}
