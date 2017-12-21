import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.loginGoogle();
  }
}
