import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {

  constructor(private loginService: LoginService) { }

  login() {
    this.loginService.loginFacebook();
  }
}
