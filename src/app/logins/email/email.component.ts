import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from '../password/password.validators';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email: any;
  password: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email, this.password);
  }
}
