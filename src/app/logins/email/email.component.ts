import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FirebaseAuthService} from '../../core/firebase/auth/firebase-auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.email],
    ),
    password: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private firebaseAuthService: FirebaseAuthService) { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.firebaseAuthService.loginEmail(this.email.value, this.password.value);
  }
}
