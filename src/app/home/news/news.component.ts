import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { HomeService } from '../home.service';

@Component({
  selector: 'h-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  constructor (
    private service: HomeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit () {
    this.route.params
        .switchMap((params: Params) => this.service.getNewsDetail(params['id']))
        .subscribe(data => {
          console.log(data);
        });
  }
}
