import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'h-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  private parentTag;
  private parentType;

  constructor (private route: ActivatedRoute) { }

  ngOnInit () {
    this.route.params.switchMap((params: Params) => this.show(params['parentTag'], params['parentType']))
              .subscribe(data => { });
  }

  show (tag, type) {
    this.parentTag = tag;
    this.parentType = type;
    return tag + ':' + type;
  }
}
