import { Component } from '@angular/core';

@Component({
  selector: 'h-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  containerTypeNameArr: Array<Object> = [
    {
      title: '精选课程'
    },
    {
      title: '免费好课',
      filter: ['Java', 'PHP']
    },
    {
      title: '实战推荐'
    }
  ];

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
}