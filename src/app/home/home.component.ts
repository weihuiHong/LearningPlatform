import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'h-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  containerTypeNameArr: Array<Object> = [
    {
      title: '精选视频'
    },
    {
      title: '免费好课 | 视频'
    },
    {
      title: '免费好课 | 音频'
    },
    {
      title: '免费好课 | PPT'
    }
  ];
  featuredCourse: Array<Object> = [];
  freeCourse: Array<Array<Object>> = [];

  constructor (private service: HomeService) { }

  courseItem: Object = {
      id:"2",
      resourceName:"C/C++资源",
      src:"/home/c",
      rank:null,
      length:100,
      image:null,
      description:"C/C++资源描述",
      views:20,
      type:1,
      createTime:1496471861000
  }

  ngOnInit () {
    this.service.getFeaturedCourse().then(data => {
      this.featuredCourse = data;
      console.log(this.featuredCourse);
    });
    this.service.getFreeCourse().then(data => {
      this.freeCourse.push(data['videoList']);
      this.freeCourse.push(data['audioList']);
      this.freeCourse.push(data['pptList']);
    });
  }
}
