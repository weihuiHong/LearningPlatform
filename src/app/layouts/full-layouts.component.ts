import { Component, OnInit } from '@angular/core';

import { FullLayoutsService } from './full-layouts.service';
import { Url } from '../interface';

@Component({
  selector: 'h-full-layouts',
  templateUrl: 'full-layouts.component.html',
  styleUrls: ['full-layouts.component.css']
})
export class FullLayoutsComponent implements OnInit{
  private menuItem: Array<Object>;

  constructor (private service: FullLayoutsService) { }

  ngOnInit () {
    this.service.getNav().then(data => {
      this.menuItem = data;
    });
  }

  toLogout () {
    this.service.toLogout();
  }

  toSearch (str: string) {
    this.service.toSearch(str).then(data => {
      console.log(data);
    });
  }
}
