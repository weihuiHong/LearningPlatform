import { Component } from '@angular/core';

@Component({
  selector: 'h-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  containerTypeNameArr: Array<string> = [
    '精选课程',
    '免费好课',
    'Java'
  ];
}
