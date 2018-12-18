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
  user: User;
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
    if (this.userForm.formType === 'signup') {
      this.signUp();
    } else if (this.userForm.formType === 'signin') {
      this.signIn();
    }
  }
  signUp() {
    this._commonservice.signUp(this.user).subscribe((res) => {
      this.user = {};
      alert('data submitted successfully');
    }, (error) => { console.log(error); });
  }

  signIn() {
    this._commonservice.signUp(this.user).subscribe((res: any) => {
      this.user = {};
      localStorage.setItem('user_token', JSON.stringify(res.token));
      localStorage.setItem('user_id', JSON.stringify(res.userinfo._id));
      this._dataservice.userInfo = res.userInfo;
    }, (error) => { console.log(error); });
  }

  changeForm() {
    if (this.userForm.formType === 'signin') {
      this.router.navigate(['user/signup']);
    } else {
      this.router.navigate(['user/signin']);
    }
  }
}
