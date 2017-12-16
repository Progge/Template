import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.email.value, this.password.value);
  }
}
