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
  private src: string;

  constructor (private service: ShowVideoService, private route: ActivatedRoute,) { }

  ngOnInit () {
    this.route.params
      .switchMap((params: Params) => <string>params['src'])
      .subscribe(src => { this.src = src });
    
    this.service.getCommentArr().then(data => {
      this.commentArr = data;
    });
  }
}
