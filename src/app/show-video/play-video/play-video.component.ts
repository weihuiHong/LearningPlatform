import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'h-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit{
  @Input() src: string;

  ngOnInit () {
    this.src = 'http://192.168.1.110:8080/video/music.mp4';
  }
}
