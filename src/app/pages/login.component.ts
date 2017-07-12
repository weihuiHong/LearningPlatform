import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { PagesService } from './pages.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginComponent {
  constructor (
    private authService: AuthService,
    private service: PagesService
  ) { }

  toLogin (username: string, password: string) {
    this.service.login(username, password).then(data => {
      console.log(data);
      if (data['success']) {
        this.authService.login(data['resultObject']['token'], data['resultObject']['userId'], data['resultObject']['name']);
      }
    });
  }
}
