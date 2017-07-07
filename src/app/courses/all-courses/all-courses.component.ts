import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'h-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit{
  @Input() parentType;
  @Input() parentTag;
  private labelTagArr: Array<Object> = [];
  private courseArr: Array<Object> = [];
  private totalPage: Array<any> = [];
  private nowPage = 1;
  private type = 1;
  private tag = '';
  private maxTime = '';
  private minTime = '';
  private newest = 1;

  constructor (private service: CoursesService) { }

  // ngDoCheck () {
  //   if (this.parentType && this.parentTag) {
  //     this.type = this.parentType;
  //     this.tag = this.parentTag;
  //     this.toChgCourse(this.type, this.tag, this.maxTime, this.minTime, this.newest, this.nowPage);
  //   }
  // }

  ngOnInit () {
    this.service.getTagArr().then(data => {
      this.labelTagArr.push({
        labelId: 0,
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
        labelId: 1,
        labelName: '类型',
        tagArr: data
      });
      this.labelTagArr.push({
        labelId: 2,
        labelName: '时长',
        tagArr: [
          {
            id: '1',
            tagName: '3分钟以内'
          },
          {
            id: '2',
            tagName: '5分钟以内'
          },
          {
            id: '3',
            tagName: '10分钟以内'
          }
        ]
      });
    });
    
    this.toChgCourse(this.type, this.tag, this.maxTime, this.minTime, this.newest, this.nowPage);
  }

  toChgCourse (type: string | number, tag: string | number, maxTime: string | number, minTime: string | number, newest: string | number, nowPage: string | number) {
    this.service.getCourseArr(type, tag, maxTime, minTime, newest, nowPage).then(data => {
      this.courseArr = data['resourceList'];
      this.totalPage.length = Math.ceil(data['total'] / 12);
    });
  }

  getFromLabel (str) {
    let info = str.split(':');
    if (info[0] == '0') {//type
      this.type = info[1];
    } else if (info[0] == '1') {//tag
      this.tag = info[1];
    } else if (info[0] == '2') {//maxTime, minTime
      this.maxTime = info[1];
    }
    this.toChgCourse(this.type, this.tag, this.maxTime, this.minTime, this.newest, this.nowPage);
  }

  newOrHot (id) {
    this.newest = id;
    this.toChgCourse(this.type, this.tag, this.maxTime, this.minTime, this.newest, this.nowPage);
  }
}
