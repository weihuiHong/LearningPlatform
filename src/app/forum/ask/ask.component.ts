import { Component } from '@angular/core';

import { ForumService } from '../forum.service';

@Component({
    selector: 'h-ask',
    templateUrl: './ask.component.html',
    styleUrls: ['./ask.component.css']
})
export class AskComponent {
    option = {
        language: 'zh_cn',
        placeholderText: "请输入内容",
        height: 400,
        charCounterCount: true,
        // charCounterMax: 400,
        toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
        codeMirror: false,
        codeMirrorOptions: {
            tabSize: 4
        }
    };

    constructor (private service: ForumService) { }

    toRelease (title, froalaText, check) {
        this.service.toReleaseAsk(title, froalaText, check).then(data => {
            console.log(title, froalaText, check);
        });
    }
}