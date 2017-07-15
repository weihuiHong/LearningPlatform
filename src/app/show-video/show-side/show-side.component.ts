import { Component, OnInit } from '@angular/core';
import { ShowVideoService } from '../show-video.service';

@Component({
    selector: 'h-show-side',
    templateUrl: './show-side.component.html',
    styleUrls: ['./show-side.component.css']
})
export class ShowSideComponent implements OnInit{
    recommendVideoArr: Array<Object> = [];
    recommendAudioArr: Array<Object> = [];
    recommendPPTArr: Array<Object> = [];

    constructor (private service: ShowVideoService) { }

    ngOnInit () {
        this.service.getRecommendCourse().then(data => {
            this.recommendVideoArr = data['videoList'];
            this.recommendAudioArr = data['audioList'];
            this.recommendPPTArr = data['pptList'];
        });
    }
}