import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'h-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit{
  @Input() courseItem: Object;

  ngOnInit () {
    console.log(this.courseItem['src']);
  }
}
