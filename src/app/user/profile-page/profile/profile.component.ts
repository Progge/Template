import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
