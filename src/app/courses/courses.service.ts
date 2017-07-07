import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';
import { AuthService } from '../auth.service';

@Injectable()
export class CoursesService {
  constructor (
    private http: Http,
    private authService: AuthService
  ) { }

  getTagArr () {
    return this.http.get(Url.get('resourceTag') + '?userId=' + this.authService.getUserId() + '&token=' + this.authService.getToken())
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
    // return this.http.get('assets/JSON/tag.json')
    //                 .toPromise()
    //                 .then(res => <Array<Object>>res.json())
    //                 .then(data => { return data; });
  }

  getCourseArr (type: string | number, tag: string | number, maxTime: string | number, minTime: string | number, newest: string | number, pageNum: string | number) {
    return this.http.get(Url.get('resource') + 
                        '?type=' + type + '&newest=' + newest + '&tagId=' + tag + 
                        '&pageSize=12&pageNum=' + pageNum + 
                        '&token=' + this.authService.getToken() + '&userId=' + 
                        this.authService.getUserId())
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
    // return this.http.get(Url.get('recommendedResource') + '?userId=1&token=' + this.authService.getToken())
    //                 .toPromise()
    //                 .then(res => <Array<Object>>res.json())
    //                 .then(data => { return data; });
  }
}
