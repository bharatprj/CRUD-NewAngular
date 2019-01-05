import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss']
})
export class AppChildComponent implements OnInit {
  constructor(private _dataservice: DataService, private router: Router) { }

  ngOnInit() {
      const id = localStorage.getItem('user_id');
      if (!id) {
        this.router.navigate(['user/account/signin']);
      } else {
        this._dataservice.intialiseUserInfo(id);
      }
  }
}
