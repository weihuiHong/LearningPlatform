import { Component, Input, EventEmitter, Output } from '@angular/core';

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

  getfilterStr (str) {
    this.toFilter.emit(str);
  }
}
