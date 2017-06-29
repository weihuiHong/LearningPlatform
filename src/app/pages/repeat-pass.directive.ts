import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[repeatPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: RepeatPassDirective, multi: true}]
})
export class RepeatPassDirective implements Validator, OnChanges {
  @Input() repeatPassword: Array<string>;
  ngOnChanges (changes: SimpleChanges) {
    const change = changes['repeatPassword'];
    if (change) {
      console.log(change);
      console.log(this.repeatPassword);
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return null;
  }
}
