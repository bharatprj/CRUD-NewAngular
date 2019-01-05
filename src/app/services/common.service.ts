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

  // user sign up api
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

  // user signin api
  signIn = (data) => {
    return this._http.get(`${uri}user/signin`, { params: data });
  }

  // user image upload api
  uploadImage = (data) => {
    headers.set('Content-Type', 'multipart/form-data').set('Accept', 'application/json');
    return this._http.post(`${uri}user/uploadimage`, data, {headers: headers});
  }

// getting user info api
  getUserInfo = (id) => {
    return this._http.get(`${uri}user/info?_id=${id}`);
  }

  // deleting user Account api
  deleteUserAccount = (id) => {
    return this._http.delete(`${uri}user/remove?_id=${id}`);
  }

  // updating user info api
  updateUserInfo = (id, data) => {
    const form_data = new FormData();
    for (const key in data) {
      if (key) {
        form_data.append(key, data[key]);
      }
    }
    headers.set('Content-Type', 'multipart/form-data').set('Accept', 'application/json');
    return this._http.put(`${uri}user/update?_id=${id}`, form_data, {headers: headers});
  }
}
