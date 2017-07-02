import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = true;
  token: string = '';

  constructor (
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    if (!this.localStorageService.get('token')) {

    }
  }

  redirectUrl: string;

  login (token: string) {
    this.isLoggedIn = true;
    this.localStorageService.set('token', token);
    this.localStorageService.set('time', new Date());
    this.router.navigate(['/home']);
  }

  logout () {
    this.isLoggedIn = false;
    this.localStorageService.remove('token');
    this.localStorageService.remove('time');
  }
}
