import { Component, Input } from '@angular/core';

@Component({
  selector: 'h-label-course',
  templateUrl: './label-course.component.html',
  styleUrls: ['./label-course.component.css']
})
export class LabelCourseComponent {
  @Input() labelTag;
}
