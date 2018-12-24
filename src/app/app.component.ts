import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _dataservice: DataService) {
  }
  ngOnInit(): void {
    if (!this._dataservice.userInfo) {
      const id = JSON.parse(localStorage.getItem('user_id'));
      this._dataservice.intialiseUserInfo(id);
    }
  }
}
