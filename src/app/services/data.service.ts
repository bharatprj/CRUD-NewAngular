import { Injectable } from '@angular/core';
import { User } from '../app-child/user-form/user.model';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
progressBar: Boolean = false;
userDetails = new BehaviorSubject<User>({});
userInfoInstance: User = {};
userInfo = this.userDetails.asObservable();
isLogin = new BehaviorSubject<boolean>(false);
login = this.isLogin.asObservable();
isProfilePage: Boolean = false;
  constructor(private _commonservice: CommonService, private router: Router) {
   }

  // intialising user info
  intialiseUserInfo(id) {
    this._commonservice.getUserInfo(id).subscribe((response) => {
      this.isLogin.next(true);
      this.userInfoInstance = response;
        this.userDetails.next(response);
    }, (error) => {
      console.log(error);
      this.router.navigate(['user/account/signin']);
    });
  }

  logOut = () => {
    localStorage.clear();
    this.userInfo = of({});
    this.isLogin.next(false);
    this.router.navigate(['user/account/signin']);
  }

  removeUserAccount = () => {
    const id = localStorage.getItem('user_id');
    this._commonservice.deleteUserAccount(id).subscribe((res) => {
      alert('account Removed Successfully');
      this.logOut();
    }, (error) => { console.log(error); });
  }
}
