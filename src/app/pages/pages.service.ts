import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PagesService {
    constructor (private http: Http) { }

    judgementOnlyUsername (username: string) {
        return this.http.get('assets/JSON/free.json')
                        .toPromise()
                        .then(res => <boolean>res.json())
                        .then(data => { return data; });
    }

    judgementOnlyNameAndJobNum (realName: string, jobNum: string) {
        return this.http.get('assets/JSON/free.json')
                        .toPromise()
                        .then(res => <boolean>res.json())
                        .then(data => { return data; });
    }

    register (realName: string, jobNum: string, name: string, pass: string, email: string, phone: string) {
        return this.http.get('assets/JSON/free.json')
                        .toPromise()
                        .then(res => <boolean>res.json())
                        .then(data => { return data; });
    }

    login (username: string, password: string) {
        return this.http.get('assets/JSON/free.json')
                        .toPromise()
                        .then(res => <string>res.json())
                        .then(data => { return data; });
    }
}