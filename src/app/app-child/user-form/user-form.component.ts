import { Component, OnInit, OnChanges, ElementRef, AfterViewInit} from '@angular/core';
import { User, UserForm } from './user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
import * as $ from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
      if (this.userForm.formType === 'signin') {
        this.message = 'Create New Account';
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
      localStorage.setItem('user_token', JSON.stringify(res.token));
      localStorage.setItem('user_id', JSON.stringify(res.userinfo._id));
      this._dataservice.isLogin = true;
      this._dataservice.userInfo = res.userinfo;
      this.router.navigate(['profile', res.userinfo._id]);
    }, (error) => {
      this.isProgress = false;
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
      this.router.navigate(['user/signup']);
      this.isProgress = false;
    } else {
      this.router.navigate(['user/signin']);
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
