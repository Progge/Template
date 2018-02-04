import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../firebase/auth/firebase-auth.service';
import {UserService} from '../../user/shared/user.service';
import {AuthService} from '../auth/auth.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public userService: UserService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'sign-in',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/sign-in.svg'));
    iconRegistry.addSvgIcon(
      'sign-out',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/sign-out.svg'));
  }

  ngOnInit() {
  }

}
