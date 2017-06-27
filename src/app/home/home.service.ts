import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
  constructor (private http: Http) { }

  getFeaturedCourse () {
      return this.http.get('assets/JSON/featured.json')
                      .toPromise()
                      .then(res => <Array<Object>>res.json()['videoList'])
                      .then(data => { return data; });
  }

  getFreeCourse () {
      return this.http.get('assets/JSON/free.json')
                      .toPromise()
                      .then(res => <Object>res.json())
                      .then(data => { return data; });
  }

  getFilterCourse (type: string, filterStr: string) {
    console.log(type + filterStr);
    return this.http.get('assets/JSON/free.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json()['videoList'])
                    .then(data => { return data; });
  }

  getNewsList () {
    return this.http.get('assets/JSON/news.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
  }

  getNewsDetail (id) {
    console.log(id);
  }
}
