import { Component, Input } from '@angular/core';

@Component({
  selector: 'h-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() commentItem: Object;
}
