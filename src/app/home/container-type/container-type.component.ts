import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'h-container-type',
  templateUrl: './container-type.component.html',
  styleUrls: ['./container-type.component.css']
})
export class ContainerTypeComponent{
  @Input() title: string;
  @Input() courseArr: Array<Object>;
  @Input() filter: Array<string>;
  @Output() toFilter = new EventEmitter<boolean>();

  constructor (private router: Router) { }

  getfilterStr (str) {
    this.router.navigate(['/courses', {parentType: 1, parentTag: 1}]);
  }
}
