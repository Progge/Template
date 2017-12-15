import { AbstractControl } from '@angular/forms/src/model';
import { ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static passwordsDoNotMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const repeat = control.get('repeat').value;
    if (password !== repeat) {
      return {passwordsDoNotMatch: true};
    } else {
      return null;
    }
  }

  static invalidOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({invalidOldPassword: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
