import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShowVideoService {
  constructor (private http: Http) { }

  getCommentArr () {
    return this.http.get('assets/JSON/discuss.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
    // return this.http.get('http://192.168.1.110:8080/resDiscuss/getResDiscuss?resourceId=1')
    //                 .toPromise()
    //                 .then(res => <Array<Object>>res.json())
    //                 .then(data => { return data; });
  }
}
