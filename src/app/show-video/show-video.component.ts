import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ShowVideoService } from './show-video.service';

@Component({
  selector: 'h-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit{
  private commentArr: Array<Object> = [];
  private id: string;
  private src: string;

  constructor (private service: ShowVideoService, private route: ActivatedRoute,) { }

  ngOnInit () {
    this.route.params
        .switchMap((params: Params) => this.service.getResourceById(params['id']))
        .subscribe(data => {
          this.src = data['src'];
          this.service.getCommentArr(data['id']).then(data1 => {
            this.commentArr = data1;
          });
        });
  }
}
