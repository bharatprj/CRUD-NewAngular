import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.url.subscribe((res) => {
    //   const a = res;
    // });
  }

}
