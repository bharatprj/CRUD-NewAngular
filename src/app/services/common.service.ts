import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const uri = 'http://localhost:8080/api/';
const headers: HttpHeaders =  new HttpHeaders();
const options = {headers: new HttpHeaders};
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public _http: HttpClient) { }

  signUp = (data) => {
    const form_data = new FormData();
    for (const key in data) {
      if (key) {
        form_data.append(key, data[key]);
      }
    }
    headers.set('Content-Type', 'multipart/form-data').set('Accept', 'application/json');
    return this._http.post(`${uri}user/signup`, form_data, {headers: headers});
  }

  signIn = (data) => {
    return this._http.get(`${uri}user/signin`, { params: data });
  }

  uploadImage = (data) => {
    headers.set('Content-Type', 'multipart/form-data').set('Accept', 'application/json');
    return this._http.post(`${uri}user/uploadimage`, data, {headers: headers});
  }

  getUserInfo = (id) => {
    return this._http.get(`${uri}user/info?_id=${id}`);
  }
}
