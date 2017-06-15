import { Component, Input } from '@angular/core';

@Component({
  selector: 'h-container-type',
  templateUrl: './container-type.component.html',
  styleUrls: ['./container-type.component.css']
})
export class ContainerTypeComponent {
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

  @Input() name: string;
  @Input() num: number;
}
