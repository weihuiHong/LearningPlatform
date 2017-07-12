import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ForumService } from '../forum.service';

@Component({
    selector: 'h-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
    option = {
        language: "zh_cn",
        placeholderText: "请输入内容",
        height: 300,
        charCounterCount: true,
        charCounterMax: 200,
        toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
        codeMirror: false,
        codeMirrorOptions: {
            tabSize: 4
        }
    };
    commentArr = [];
    postInfo = {};

    constructor (
        private service: ForumService,
        private route: ActivatedRoute
    ) { }

    ngOnInit () {
        this.route.params
        .switchMap((params: Params) => this.service.getPostingById(params['id']))
        .subscribe(data => {
            this.postInfo = data;
            this.service.getPostingDis(data['id']).then(data1 => {
                this.commentArr = data1;
            });
        });
    }

    commitComment (froalaText) {
        console.log(froalaText);
    }
}