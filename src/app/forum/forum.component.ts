import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ForumService } from './forum.service';

@Component({
    selector: 'h-forum',
    templateUrl: './forum.component.html',
    styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
    typeActive = 0;//0是所有，1是交流讨论，2是技术分享
    questionArr: Array<Object> = [];
    nowPage = 1;
    totalPage: Array<any> = [];

    constructor (
        private service: ForumService,
        private router: Router
    ) { }

    ngOnInit () {
        this.service.getQuestions(this.typeActive, this.nowPage).then(data => {
            this.questionArr = data['questions'];
            this.totalPage.length = data['page'];
        });
    }

    chgQuestionArr (id) {
        this.typeActive = id;
        this.service.getQuestions(this.typeActive, this.nowPage).then(data => {
            this.questionArr = data['questions'];
            this.totalPage.length = data['page'];
        });
    }

    toOtherPage (now) {
        if (now < 1) {
            now = this.totalPage.length;
        } else if (now > this.totalPage.length) {
            now = 1;
        }
        this.nowPage = now;
        this.service.getQuestions(this.typeActive, this.nowPage).then(data => {
            this.questionArr = data['questions'];
            this.totalPage.length = data['page'];
        });
    }

    goAsk () {
        this.router.navigate(['/ask']);
    }
}