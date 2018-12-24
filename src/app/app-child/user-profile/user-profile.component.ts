import { Component, OnInit } from '@angular/core';
import { User } from '../user-form/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User = {};
  constructor(public _dataservice: DataService) { }

  ngOnInit() {
    this.user = this._dataservice.userInfo;
  }

}
