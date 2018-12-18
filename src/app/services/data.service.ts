import { Injectable } from '@angular/core';
import { User } from '../app-child/user-form/user.model';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userInfo: User;
isLogin: Boolean = false;
  constructor(public _commonservice: CommonService) {

   }
  intialiseUserInfo(id) {
    this._commonservice.getUserInfo(id).subscribe((response) => {
      this.isLogin = true;
      this.userInfo = response;
    });
  }
}
