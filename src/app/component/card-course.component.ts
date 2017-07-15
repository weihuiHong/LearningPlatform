import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'h-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent implements OnInit{
  @Input() courseItem: Object;

  constructor (
    private router: Router
  ) { }

  ngOnInit () {
    
  }

  goPlay (type, id) {
    if (type == '1') {
      this.router.navigate(['/video', id]);
    } else if (type == '2') {
      this.router.navigate(['/ppt', id]);
    } else if (type == '3') {
      this.router.navigate(['/audio', id]);
    }
  }
}
