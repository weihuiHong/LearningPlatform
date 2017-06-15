import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoursesService {
  constructor (private http: Http) { }

  getTagArr () {
    return this.http.get('assets/JSON/tag.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
  }

  getCourseArr () {
    return this.http.get('assets/JSON/course.json')
                    .toPromise()
                    .then(res => <Array<Object>>res.json())
                    .then(data => { return data; });
    // return this.http.get('http://192.168.1.110:8080/resource/getResource?type=4&newest=1&tagId=&pageSize=12&pageNum=1')
    //                 .toPromise()
    //                 .then(res => <Array<Object>>res.json())
    //                 .then(data => { return data; });
  }
}
