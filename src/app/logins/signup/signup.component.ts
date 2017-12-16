import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PasswordValidators} from '../password/password.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.email],
    ),
    password: new FormControl('',
      [Validators.required, Validators.minLength(8)],
    ),
    repeat: new FormControl('',
      [Validators.required],
    ),
  }, PasswordValidators.passwordsDoNotMatch);

  constructor() { }

  onSubmit() {
    console.log(this.email.value, this.password.value, this.repeat.value);
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
}
