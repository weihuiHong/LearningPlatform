import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FullLayoutsService {
  // constructor (private http: Http) { }
  constructor (private http: Http) { }

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
}
