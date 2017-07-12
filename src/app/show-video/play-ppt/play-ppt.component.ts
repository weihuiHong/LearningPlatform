import { Component, Input } from '@angular/core';

@Component({
    selector: 'h-play-ppt',
    templateUrl: './play-ppt.component.html',
    styleUrls: ['./play-ppt.component.css']
})
export class PlayPPTComponent {
    @Input() src: string;
}