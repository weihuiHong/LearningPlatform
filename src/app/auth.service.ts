import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  token: string = '';

  constructor (
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    if (this.localStorageService.get('time')) {
      let now: any = new Date();
      let before: any = new Date(this.localStorageService.get('time').toString());
      if ((now - before) / 1000 / 60 / 60 >= 8) {
        this.isLoggedIn = false;
        this.localStorageService.remove('token');
        this.localStorageService.remove('time');
      } else {
        this.isLoggedIn = true;
      }
    }
  }

  redirectUrl: string;

  login (token: string, userId: string) {
    this.isLoggedIn = true;
    this.localStorageService.set('token', token);
    this.localStorageService.set('time', new Date());
    this.localStorageService.set('userId', userId);
    this.router.navigate(['/home']);
  }

  logout () {
    this.isLoggedIn = false;
    this.localStorageService.remove('token');
    this.localStorageService.remove('time');
    this.localStorageService.remove('userId');
    this.router.navigate(['/login']);
  }

  getToken () {
    return this.localStorageService.get('token');
  }

  getUserId () {
    return this.localStorageService.get('userId');
  }
}
