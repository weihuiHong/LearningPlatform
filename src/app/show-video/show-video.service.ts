import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';
import { AuthService } from '../auth.service';

@Injectable()
export class ShowVideoService {
  constructor (
    private http: Http, 
    private service: AuthService
  ) { }

  getCommentArr (id: string) {
    return this.http.get(Url.get('getResDiscuss') + '?resourceId=' + id)
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

  getRecommendCourse () {
    return this.http.post(Url.get('recommendedResource') + 
                          '?userId=' + this.service.getUserId() + 
                          '&token=' + this.service.getToken(), null)
                    .toPromise()
                    .then(res => <Object>res.json())
                    .then(data => { return data; });
  }
}
