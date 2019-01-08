import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from './services/data.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canAccess: boolean ;
  constructor(private _dataservice: DataService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     const id = localStorage.getItem('user_id');
    if (id) {
      return true ;
    } else {
      return false ;
    }
    // return new Promise((resolve, reject) => {
    //   this._dataservice.login.subscribe((response) => {
    //     resolve(response);
    //   }, (err) => {
    //     reject(err);
    //   });
    // });
  }
}
