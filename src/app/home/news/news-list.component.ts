import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'h-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsListComponent {
  @Input() newsList;

  constructor (
    private router: Router
  ) { }

  goNews (id) {
    this.router.navigate(['/news', id]);
  }
}
