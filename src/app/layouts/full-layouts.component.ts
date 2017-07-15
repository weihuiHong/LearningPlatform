import { Component, OnInit } from '@angular/core';

import { FullLayoutsService } from './full-layouts.service';
import { Url } from '../interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'h-full-layouts',
  templateUrl: 'full-layouts.component.html',
  styleUrls: ['full-layouts.component.css']
})
export class FullLayoutsComponent implements OnInit{
  private menuItem: Array<Object>;
  isLogged = false;

  constructor (private service: FullLayoutsService, private authService: AuthService) { }

  ngOnInit () {
    // this.service.getNav().then(data => {
    //   this.menuItem = data;
    // });
    if (this.authService.getToken()) {
      this.isLogged = true;
    }
    // this.isLogged = this.authService.isLoggedIn;
  }

  toLogout () {
    this.service.toLogout();
  }

  toSearch (str: string) {
    this.service.toSearch(str).then(data => {
      console.log(str);
    });
  }
}
