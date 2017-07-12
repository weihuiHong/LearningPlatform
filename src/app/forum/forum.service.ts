import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Url } from '../interface';

import { AuthService } from '../auth.service';

@Injectable()
export class ForumService {
    constructor (
        private http: Http,
        private authService: AuthService
    ) { }

    getQuestions (type: string | number, page: string | number) {
        return this.http.post(Url.get('postList') + '?type=' + type + '&pagesize=10&pagenum=' + page, null)
                        .toPromise()
                        .then(res => <Array<Object>>res.json())
                        .then(data => { return data; });

        // return this.http.get('assets/JSON/question.json')
        //                 .toPromise()
        //                 .then(res => <Array<Object>>res.json())
        //                 .then(data => { return data; });
    }

    toReleaseAsk (title, froalaText, check) {
        return this.http.post(Url.get('sendPost') + '?title=' + title 
                                + '&presenter=' + this.authService.getUsername() 
                                + '&content=' + froalaText 
                                + '&type=' + check 
                                + '&token=' + this.authService.getToken(), null)
                        .toPromise()
                        .then(res => <any>res.json())
                        .then(data => { return data; });

        // return this.http.get('assets/JSON/question.json')
        //                 .toPromise()
        //                 .then(res => <any>res.json())
        //                 .then(data => { return data; });
    }

    getPostingById (id) {
        return this.http.get('assets/JSON/postInfo.json')
                        .toPromise()
                        .then(res => <any>res.json())
                        .then(data => { return data; });
        // return this.http.post(Url.get('getPostingById') + '?id=' + id, null)
        //                 .toPromise()
        //                 .then(res => <any>res.json())
        //                 .then(data => { return data; });
    }

    getPostingDis (id) {
        return this.http.get('assets/JSON/postComment.json')
                        .toPromise()
                        .then(res => <any>res.json())
                        .then(data => { return data; });

        // return this.http.post(Url.get('getPostingDis') + '?postingId=' + id, null)
        //                 .toPromise()
        //                 .then(res => <any>res.json())
        //                 .then(data => { return data; });
    }

    toResponsePost () {
        return this.http.post(Url.get('response'), null)
                        .toPromise()
                        .then(res => <any>res.json())
                        .then(data => { return data; });
    }
}