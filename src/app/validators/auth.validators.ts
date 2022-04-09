import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class AuthValidators {
  static email(control: AbstractControl): ValidationErrors | null {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value == '')
      return { message: "Email is required." }
    if (!control.value.match(re))
      return { message: "Only emails are allowed." }
    return null;
  }

  static employeeId(control: AbstractControl): ValidationErrors | null {
    if (control.value == '')
      return { message: "Employee ID is required." }
    if (isNaN(Number(control.value)))
        return { message: "Employee ID must be a number (no letters or special characters!)" }
    if (control.value.length < 6)
      return { message: "Employee ID must have at least 6 digits" }
    return null;
  }

  static password(control: AbstractControl): ValidationErrors | null {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value == '')
      return { message: "Password is required." }
    if (control.value.length < 8)
      return { message: "Password must have at least 8 characters." }
    return null;
  }

  // @ts-ignore
  static confirmPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // console.log(control.value.confirmPassword !== control.value.password);
    if (control.value.confirmPassword !== control.value.password) {
      return { message: "Passwords should be the same." };
    }else{
      return null;
    }
  }

}
