import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public _dataservice: DataService, private router: Router) {
    const id = localStorage.getItem('user_id');
    if (!id) {
      this.router.navigate(['user/account/signin']);
    } else {
      this._dataservice.intialiseUserInfo(id);
    }
  }
  ngOnInit(): void {
  }
}
