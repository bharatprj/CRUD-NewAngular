import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user-form/user.model';
import { DataService } from 'src/app/services/data.service';
import * as _ from 'lodash';
import { Observable, of } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['field', 'value'];
  dataSource: Observable<Array<object>>;
  user: Observable<User>;
  constructor(public _dataservice: DataService, public _commonservice: CommonService, private router: Router) { }

  ngOnInit() {
    this._dataservice.isProfilePage = true;
    const id = localStorage.getItem('user_id');
    this._dataservice.userInfo.subscribe((response: any) => {
      // const imgPath = new Buffer(response.image).toString('base64');
      $('#profileImg').attr('src', response.image);
      const filteredData = _.omit(response, ['_id', '__v', 'password', 'image']);
      const dataSourceInstance = [];
      for (const key in filteredData) {
        if (key) {
          dataSourceInstance.push({ 'field': key, 'value': filteredData[key] });
        }
      }
      this.dataSource = of(dataSourceInstance) ;
    }, (error) => {
      console.log(error);
      this.router.navigate(['user/account/signin']);
    });
  }

  ngOnDestroy(): void {
    this._dataservice.isProfilePage = false;
  }

}
