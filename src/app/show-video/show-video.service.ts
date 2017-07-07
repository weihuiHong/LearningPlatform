import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';

@Injectable()
export class ShowVideoService {
  constructor (private http: Http) { }

  getCommentArr (id: string) {
    return this.http.get(Url.get('getResDiscuss') + '?getResDiscuss=' + id)
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
    // return this.http.get('assets/JSON/discuss.json')
    //                 .toPromise()
    //                 .then(res => <Array<Object>>res.json())
    //                 .then(data => { return data; });
  }

  getResourceById (id: string) {
    return this.http.get(Url.get('getResourceById') + '?id=' + id)
                    .toPromise()
                    .then(res => <Object>res.json())
                    .then(data => { return data; });
  }
}
