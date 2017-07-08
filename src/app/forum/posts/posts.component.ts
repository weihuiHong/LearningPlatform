import { Component } from '@angular/core';

@Component({
    selector: 'h-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {
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

    commitComment (froalaText) {
        console.log(froalaText);
    }
}