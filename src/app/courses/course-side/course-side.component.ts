import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses.service';

@Component({
    selector: 'h-course-side',
    templateUrl: './course-side.component.html',
    styleUrls: ['./course-side.component.css']
})
export class CourseSideComponent implements OnInit {
    recommendVideoArr: Array<Object> = [];
    recommendAudioArr: Array<Object> = [];
    recommendPPTArr: Array<Object> = [];

    constructor (private service: CoursesService) { }

    ngOnInit () {
        this.service.getRecommendCourse().then(data => {
            this.recommendVideoArr = data['videoList'];
            this.recommendAudioArr = data['audioList'];
            this.recommendPPTArr = data['pptList'];
        });
    }
}