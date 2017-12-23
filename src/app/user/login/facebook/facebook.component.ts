import { Component } from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {

  constructor(private userService: UserService) { }

  login() {
    this.userService.loginFacebook();
  }
}
