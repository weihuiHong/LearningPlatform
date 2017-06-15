import { Component, OnInit } from '@angular/core';

import { FullLayoutsService } from './full-layouts.service';

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
}
