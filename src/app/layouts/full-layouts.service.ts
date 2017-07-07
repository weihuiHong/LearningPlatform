import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth.service';
import { Url } from '../interface';

@Injectable()
export class FullLayoutsService {
  // constructor (private http: Http) { }
  constructor (
    private http: Http,
    private authService: AuthService
  ) { }

  getNav () {
    // return this.http.get('http://192.168.1.111:8080/menu/menutree')
    //                 .toPromise()
    //                 .then(res => <Object>res.json())
    //                 .then(data => { return data; });
    return this.http.get('assets/JSON/menu.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
  }

  toLogout () {
    return this.http.get(Url.get('logout') + '?userId=' + this.authService.getUserId())
                    .toPromise()
                    .then(res => <Object>res.json())
                    .then(data => { 
                      if (data['success']) {
                        this.authService.logout();
                      }
                    });
    
  }

  toSearch (str: string) {
    return this.http.get(Url.get('search') + '?key=' + str)
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
  }
}
