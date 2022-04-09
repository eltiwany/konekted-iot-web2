import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class GeneralValidators {
  static required(control: AbstractControl): ValidationErrors | null {
    if (control.value == '')
      return { message: "This field is required." }
    return null;
  }

  static isNot(value: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == value)
          return { message: "Select other options apart from " + '"' + value + '"' }
      return null;
    }
  }

  static isPercentage(control: AbstractControl): ValidationErrors | null {
    if (control.value < 0 || control.value > 100)
      return { message: "Percentage is between 0 - 100!" }
    return null;
  }

}
