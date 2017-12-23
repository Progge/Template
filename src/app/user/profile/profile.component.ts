import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.user = user;
    });
  }

}
