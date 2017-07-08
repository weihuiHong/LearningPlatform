import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ForumService {
    constructor (private http: Http) { }

    getQuestions (id: string | number, page: string | number) {
        return this.http.get('assets/JSON/question.json')
                        .toPromise()
                        .then(res => <Array<Object>>res.json())
                        .then(data => { return data; });
    }

    toReleaseAsk (title, froalaText, check) {
        return this.http.get('assets/JSON/question.json')
                        .toPromise()
                        .then(res => <any>res.json())
                        .then(data => { return data; });
    }
}