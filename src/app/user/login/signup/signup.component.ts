import {Component, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../password/password.validators';
import { EMAIL_PATTERN, PHONE_PATTERN } from '../../../shared/shared.constants';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  @Output('signUpSuccess') signUpSuccess= new EventEmitter();

  signUpForm = new FormGroup({
    phone: new FormControl('',
      [Validators.required, Validators.pattern(PHONE_PATTERN)],
    ),
    email: new FormControl('',
      [Validators.required, Validators.pattern(EMAIL_PATTERN)],
    ),
    password: new FormControl('',
      [Validators.required, Validators.minLength(8)],
    ),
    repeat: new FormControl('',
      [Validators.required],
    ),
  }, PasswordValidators.passwordsDoNotMatch);

  constructor(private userService: UserService) {}

  get phone() {
    return this.signUpForm.get('phone');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get repeat() {
    return this.signUpForm.get('repeat');
  }

  signUp() {
    this.userService.signUp(this.phone.value, this.email.value, this.password.value, this.repeat.value);
    this.signUpSuccess.emit(true);
  }
}
