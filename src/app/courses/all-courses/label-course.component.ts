import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'h-label-course',
  templateUrl: './label-course.component.html',
  styleUrls: ['./label-course.component.css']
})
export class LabelCourseComponent {
  @Input() labelTag;
  @Output() getFromLabel = new EventEmitter<any>();
  idActive = 0;

  sendParent (type, id) {
    this.idActive = id;
    this.getFromLabel.emit(type + ':' + id);
  }
}
