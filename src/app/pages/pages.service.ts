import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';

@Injectable()
export class PagesService {
    constructor (private http: Http) { }

    judgementOnlyUsername (username1: string) {
        let headers = new Headers({ 
            // 'origin': 'http://192.168.1.108',
            // "Content-Type": "application/x-www-form-urlencoded"
            // 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            // 'Access-Control-Allow-Headers': '*'
            // 'Access-Control-Request-Headers': '*'
        });
        let options = new RequestOptions({ headers: headers });
        // return this.http.post(Url.get('checkUsername'), { 'username': username1 }, options)
        return this.http.post(Url.get('checkUsername') + '?username=' + username1, options)
                        .toPromise()
                        .then(res => <Object>res.json())
                        .then(data => { return data; });
        // return this.http.get(Url.get('checkUsername') + '?username=' + username)
        //                 .toPromise()
        //                 .then(res => <Object>res.json())
        //                 .then(data => { return data; });
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