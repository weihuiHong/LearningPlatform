import { Component, Input } from '@angular/core';

@Component({
  selector: 'h-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent{
  @Input() src: string;
  @Input() type: string;
}
