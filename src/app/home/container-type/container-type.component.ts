import { Component, Input } from '@angular/core';

@Component({
  selector: 'h-container-type',
  templateUrl: './container-type.component.html',
  styleUrls: ['./container-type.component.css']
})
export class ContainerTypeComponent {
  @Input() name: string;
  @Input() courseArr: Object;
  @Input() first: boolean;
  @Input() filter: Array<string>;
}
