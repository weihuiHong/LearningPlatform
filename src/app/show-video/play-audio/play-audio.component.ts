import { Component, Input } from '@angular/core';

@Component({
    selector: 'h-play-audio',
    templateUrl: './play-audio.component.html',
    styleUrls: ['./play-audio.component.css']
})
export class PlayAudioComponent {
    @Input() src: string;
}