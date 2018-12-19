import { Component, OnInit } from '@angular/core';
import { User, UserForm } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 hide: Boolean = true;
 isProgress: Boolean = false;
 user: User = {};
 cityList: Array<string> = ['KOTA', 'JAIPUR', 'BWM', 'JHALAWAR'];
 userForm: UserForm;
  constructor(public route: ActivatedRoute, public router: Router, public _commonservice: CommonService
    , public _dataservice: DataService) {
    this.route.data.subscribe((res) => {
      this.userForm = res.formData;
    });
  }

  ngOnInit() {
  }
  submit() {
    this.isProgress = true;
    if (this.userForm.formType === 'signup') {
      this.signUp();
    } else if (this.userForm.formType === 'signin') {
      this.signIn();
    } else if (this.userForm.formType === 'forgetpassword') {
      this.sendMail();
    } else if (this.userForm.formType === 'resetpassword') {
      this.resetPassword();
    }
  }
  signUp() {
    this._commonservice.signUp(this.user).subscribe((res) => {
      this.user = {};
      this.isProgress = false;
      alert('data submitted successfully');
    }, (error) => { console.log(error); });
  }

  signIn() {
    this._commonservice.signUp(this.user).subscribe((res: any) => {
      this.user = {};
      this.isProgress = false;
      localStorage.setItem('user_token', JSON.stringify(res.token));
      localStorage.setItem('user_id', JSON.stringify(res.userinfo._id));
      this._dataservice.userInfo = res.userInfo;
    }, (error) => { console.log(error); });
  }

  sendMail() {

  }

  resetPassword() {

  }

  changeForm() {
    this.isProgress = true;
    if (this.userForm.formType === 'signin') {
      this.router.navigate(['user/signup']);
      this.isProgress = false;
    } else {
      this.router.navigate(['user/signin']);
      this.isProgress = false;
    }
  }
}
