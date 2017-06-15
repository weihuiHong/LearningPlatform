import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'h-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit{
  private labelTagArr: Array<Object> = [];
  private courseArr: Array<Object> = [];

  constructor (private service: CoursesService) { }

  ngOnInit () {
    this.service.getTagArr().then(data => {
      this.labelTagArr.push({
        labelName: '格式',
        tagArr: [
          {
            id: '1',
            tagName: 'PPT'
          },
          {
            id: '2',
            tagName: 'Video'
          },
          {
            id: '3',
            tagName: 'Audio'
          }
        ]
      });
      this.labelTagArr.push({
        labelName: '类型',
        tagArr: data
      });
    });

    this.service.getCourseArr().then(data => {
      this.courseArr = data;
    });
  }
}
