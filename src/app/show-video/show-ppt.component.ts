import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ShowVideoService } from './show-video.service';

@Component({
  selector: 'h-show-ppt',
  templateUrl: './show-ppt.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowPPTComponent implements OnInit{
  private commentArr: Array<Object> = [];
  private id: string;
  private type: string;
  private src: string;

  constructor (private service: ShowVideoService, private route: ActivatedRoute,) { }

  ngOnInit () {
    this.route.params
        .switchMap((params: Params) => this.service.getResourceById(params['id']))
        .subscribe(data => {
          this.src = data['src'];
          this.type = data['type'];
          this.service.getCommentArr(data['id']).then(data1 => {
            this.commentArr = data1;
          });
        });
  }
}
