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
        Validators.required,
      ),
    passwords: new FormGroup({
      password: new FormControl('',
        Validators.required,
      ),
      repeat: new FormControl('',
        Validators.required,
      ),
    }, PasswordValidators.passwordsDoNotMatch),
  });

  constructor() { }

  onSubmit() {
    console.log('cådd');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get passwords() {
    return this.signUpForm.get('passwords');
  }

  get password() {
    return this.passwords.get('password');
  }

  get repeat() {
    return this.passwords.get('repeat');
  }
}
