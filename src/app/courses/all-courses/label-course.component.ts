import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'h-label-course',
  templateUrl: './label-course.component.html',
  styleUrls: ['./label-course.component.css']
})
export class LabelCourseComponent implements OnInit{
  @Input() labelTag;
  @Output() getFromLabel = new EventEmitter<any>();
  idActive = 0;

  ngOnInit () {
    if (this.labelTag['nowTag']) {
      this.idActive = this.labelTag['nowTag'];
    }
  }

  sendParent (type, id) {
    this.idActive = id;
    this.getFromLabel.emit(type + ':' + id);
  }
}
