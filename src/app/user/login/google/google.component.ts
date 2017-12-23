import { Component } from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {

  constructor(private userService: UserService) { }

  login() {
    this.userService.loginGoogle();
  }
}
