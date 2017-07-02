import { Component } from '@angular/core';

import { PagesService } from './pages.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class RegisterComponent {
  constructor (private service: PagesService) { }

  toOnlyUsername (username: string) {
    if (username != '' && username != undefined) {
      this.service.judgementOnlyUsername(username).then(data => {
        console.log(username);
      });
    }
  }

  toRealNameAndJobNum (realName: string, jobNum: string) {
    if (realName != '' && realName != undefined && jobNum != '' && jobNum != undefined) {
      this.service.judgementOnlyNameAndJobNum(realName, jobNum).then(data => {
        console.log(realName + jobNum);
      });
    }
  }

  toRegister (realName: string, jobNum: string, name: string, pass: string, email: string, phone: string) {
    this.service.register(realName, jobNum, name, pass, email, phone).then(data => {
      console.log(realName + jobNum + name + pass + email + phone);
    });
  }
}
