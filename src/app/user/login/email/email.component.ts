import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../../../shared/shared.constants';
import {LoginService } from '../shared/login.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.pattern(EMAIL_PATTERN)],
    ),
    password: new FormControl('',
      [Validators.required],
    ),
  });

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.loginService.loginEmail(this.email.value, this.password.value);
  }
}
