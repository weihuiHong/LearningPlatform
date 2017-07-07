import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';

@Injectable()
export class PagesService {
    constructor (private http: Http) { }

    judgementOnlyUsername (username: string) {
        // let headers = new Headers({ 
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Request-Headers': '*'
        // });
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(Url.get('checkUsername'), { username: username }, options)
        //                 .toPromise()
        //                 .then(res => <Object>res.json())
        //                 .then(data => { return data; });
        return this.http.get(Url.get('checkUsername') + '?username=' + username)
                        .toPromise()
                        .then(res => <Object>res.json())
                        .then(data => { return data; });
    }

    judgementOnlyNameAndJobNum (realName: string, jobNum: string) {
        return this.http.get(Url.get('checkJobNum') + '?name=' + realName + '&jobNumber=' + jobNum)
                        .toPromise()
                        .then(res => <Object>res.json())
                        .then(data => { return data; });
    }

    register (realName: string, jobNum: string, name: string, pass: string, email: string, phone: string) {
        return this.http.get(Url.get('register') + '?username=' + name + '&password=' + pass + '&name=' + realName + '&jobNumber=' + jobNum + '&mobile=' + phone + '&email=' + email)
                        .toPromise()
                        .then(res => <Object>res.json())
                        .then(data => { return data; });

    }

    login (username: string, password: string) {
        return this.http.get(Url.get('login') + '?username=' + username + '&password=' + password)
                        .toPromise()
                        .then(res => <Object>res.json())
                        .then(data => { return data; });
    }
}