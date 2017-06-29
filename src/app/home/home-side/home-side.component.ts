import { Component, OnInit } from '@angular/core';

import { HomeService } from '../home.service';

@Component({
  selector: 'h-home-side',
  templateUrl: './home-side.component.html',
  styleUrls: ['./home-side.component.css']
})
export class HomeSideComponent implements OnInit{
  homeSideArr: Array<Object> = [];

  constructor (private service: HomeService) { }

  ngOnInit () {
    this.service.getHomeSideArr().then(data => {
      this.homeSideArr = data;
    });
  }
}
