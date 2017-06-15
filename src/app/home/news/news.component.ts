import { Component } from '@angular/core';

@Component({
  selector: 'h-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsArr: Array<string> = [
    '第一个新闻',
    '第二个新闻',
    '第三个新闻',
    '第四个新闻',
    '第五个新闻',
    '第六个新闻',
    '第一个新闻',
    '第二个新闻',
    '第三个新闻',
    '第四个新闻',
    '第五个新闻',
    '第六个新闻'
  ];
}
