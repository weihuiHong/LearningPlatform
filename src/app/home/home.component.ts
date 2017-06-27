import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'h-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  featuredCourse: Array<Object> = [];
  newsList: Array<Object> = [];
  freeVideoArr: Array<Object> = [];
  freeAudioArr: Array<Object> = [];
  freePPTArr: Array<Object> = [];
  filterArr: Array<String> = ['java', 'php'];

  constructor (private service: HomeService) { }

  ngOnInit () {
    this.service.getFeaturedCourse().then(data => {
      this.featuredCourse = data;
    });
    this.service.getNewsList().then(data => {
      this.newsList = data;
    });
    this.service.getFreeCourse().then(data => {
      this.freeVideoArr = data['videoList'];
      this.freeAudioArr = data['audioList'];
      this.freePPTArr = data['pptList'];
    });
  }

  filterFreeVideo (filterStr: string) {
    this.service.getFilterCourse('video', filterStr).then(data => {
      this.freeVideoArr = data;
    });
  }

  filterFreeAudio (filterStr: string) {
    this.service.getFilterCourse('audio', filterStr).then(data => {
      this.freeAudioArr = data;
    });
  }

  filterFreePPT (filterStr: string) {
    this.service.getFilterCourse('ppt', filterStr).then(data => {
      this.freePPTArr = data;
    });
  }
}
