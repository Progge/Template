import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PasswordValidators} from '../password/password.validators';
import {FirebaseAuthService} from '../../core/firebase/auth/firebase-auth.service';

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

  constructor(private firebaseAuthService: FirebaseAuthService) { }

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
    this.firebaseAuthService.signUp(this.email.value, this.password.value);
  }
}
