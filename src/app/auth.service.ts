import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  constructor (private router: Router) { }

  redirectUrl: string;

  login () {
    this.isLoggedIn = true;
    this.router.navigate(['/home']);
  }

  logout () {
    this.isLoggedIn = false;
  }
}
