import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';
import { AuthService } from '../auth.service';

@Injectable()
export class HomeService {
  constructor (
    private http: Http,
    private authService: AuthService
  ) { }

  //获得首页新闻图片的左侧菜单栏
  getHomeSideArr () {
    return this.http.get(Url.get('sideNav'))
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
  }

  //获得精品课程
  getFeaturedCourse () {
    // return this.http.get(Url.get('homeCourse') + '?size=5&type=1')
    //                 .toPromise()
    //                 .then(res => <Array<Object>>res.json()['videoList'])
    //                 .then(data => { return data; });

      return this.http.get('assets/JSON/featured.json')
                      .toPromise()
                      .then(res => <Array<Object>>res.json()['videoList'])
                      .then(data => { return data; });
  }

  //获得免费课程
  getFreeCourse () {
    // return this.http.get(Url.get('homeCourse') + '?size=4&type=2')
    //                 .toPromise()
    //                 .then(res => <Object>res.json())
    //                 .then(data => { return data; });
      return this.http.get('assets/JSON/free.json')
                      .toPromise()
                      .then(res => <Object>res.json())
                      .then(data => { return data; });
  }

  //获得免费课程的过滤词
  getFreeFilterArr () {
    return this.http.get(Url.get('publicTag'))
                    .toPromise()
                    .then(res => <Array<string>>res.json())
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
    return this.http.get('assets/JSON/news.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
  }
}
