import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidatorFn,
  FormGroup,
  ValidationErrors
} from '@angular/forms';

import { HelpersService } from '../services/helpers.service';

export const match: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const confirmPassword = control.value;
  const res = { no_match: true };

  console.log(confirmPassword);
  return res;
};

@Directive({
  selector: '[appMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: MatchDirective,
      multi: true
    }
  ]
})
export class MatchDirective implements Validator {
  // @Input() highlightColor: string;
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('asdasdasd');
    return match(control);
  }
}
