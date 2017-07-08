import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'h-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})
export class QuestionComponent {
    @Input() question;

    constructor (
        private router: Router
    ) { }

    goDetail () {
        this.router.navigate(['/posts']);
    }
}