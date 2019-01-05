import { Component, OnInit, OnChanges, ElementRef, AfterViewInit } from '@angular/core';
import { User, UserForm } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
import * as $ from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { of } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, AfterViewInit {
  isImageUploaded: Boolean = false;
  dropZone: HTMLElement;
  hide: Boolean = true;
  message: String = 'Already Have Account';
  isProgress: Boolean = false;
  user: User = {};
  cityList: Array<string> = ['KOTA', 'JAIPUR', 'BWM', 'JHALAWAR'];
  userForm: UserForm;
  constructor(public route: ActivatedRoute, public router: Router, public _commonservice: CommonService
    , public _dataservice: DataService, public dialog: MatDialog) {
    this.route.data.subscribe((res) => {
      this.userForm = res.formData;
      if (this.userForm.formType === 'edit') {
        this._dataservice.userInfo.subscribe((response: any) => {
          this.user = response;
          $('#profileImage').attr('src', response.image);
        });
      }
      if (this.userForm.formType === 'signin') {
        this.message = 'Create New Account';
        if (this._dataservice.isLogin) {
          this._dataservice.logOut();
        }
      }
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // initialising drag and drop function
    if (this.userForm.formType === 'signup') {
      this.dropZone = document.getElementById('drop_up');
      this.bindDragDrop();
    }
  }

  // form submit function
  submit() {
    this.isProgress = true;
    if (this.userForm.formType === 'signup') {
      this.signUp();
    } else if (this.userForm.formType === 'edit') {
      this.editAccount();
    } else if (this.userForm.formType === 'signin') {
      this.signIn();
    } else if (this.userForm.formType === 'forgetpassword') {
      this.sendMail();
    } else if (this.userForm.formType === 'resetpassword') {
      this.resetPassword();
    }
  }

  // user sign up
  signUp() {
    this._commonservice.signUp(this.user).subscribe((res) => {
      this.user = {};
      this.isProgress = false;
      alert('data submitted successfully');
    }, (error) => { console.log(error); });
  }

  // user sign in
  signIn() {
    this._commonservice.signIn(this.user).subscribe((res: any) => {
      this.user = {};
      this.isProgress = false;
      localStorage.setItem('user_token', res.token);
      localStorage.setItem('user_id', res.userinfo._id);
      this._dataservice.isLogin = of(true);
      this._dataservice.userInfo = of(res.userinfo);
      this.router.navigate(['user/profile', res.userinfo._id]);
    }, (error) => {
      this.isProgress = false;
      console.log(error);
    });
  }

  // user info update
  editAccount() {
    this.user = _.omit(this.user, ['_id', '__v']);
    this._commonservice.updateUserInfo(this._dataservice.userInfoInstance._id, this.user).subscribe((res) => {
      this._dataservice.userDetails.next(res);
      this.router.navigate(['user/profile', this._dataservice.userInfoInstance._id]);
    }, (error) => {
      console.log(error);
    });
  }

  sendMail() {

  }

  resetPassword() {

  }

  // extra button action
  changeForm() {
    this.isProgress = true;
    if (this.userForm.formType === 'signin') {
      this.router.navigate(['user/account/signup']);
      this.isProgress = false;
    } else if (this.userForm.formHeader === 'edit') {
      this.router.navigate(['user/profile', this._dataservice.userInfoInstance._id]);
    } else {
      this.router.navigate(['user/account/signin']);
      this.isProgress = false;
    }
  }

  // upload image using Drag and Drop
  bindDragDrop = () => {
    this.isImageUploaded = true;
    this.dropZone.ondrop = (event: any) => {
      event.preventDefault();
      // event.stopPropagation();
      const dt = event.dataTransfer;
      const file = dt.files[0];
      this.user.image = file;
      // const data = ev.dataTransfer.getData('text');
      // ev.target.appendChild(document.getElementById(data));
      // const file = <File>event.target.files[0];
      const reader = new FileReader;
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        const imageUrl = e.target.result;
        $('#profileImage').attr('src', imageUrl);
      };
    };
    window.addEventListener('dragover', function (e: any) {
      e = e || event;
      e.preventDefault();
    }, false);
    window.addEventListener('ondragenter', function (e: any) {
      e = e || event;
      e.preventDefault();
    }, false);
    window.addEventListener('ondragleave', function (e: any) {
      e = e || event;
      e.preventDefault();
    }, false);
  }

  // upload image on click
  uploadImge = (event: any) => {
    const file = event.target.files[0];
    this.user.image = file;
    const reader = new FileReader;
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      const imageUrl = e.target.result;
      $('#profileImage').attr('src', imageUrl);
    };
  }
}


function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
// <a href="#" onclick="signOut();">Sign out</a>
// <script>
//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }
// </script>
