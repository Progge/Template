import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../core/firebase/auth/firebase-auth.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {

  constructor(private firebaseAuthService: FirebaseAuthService) { }

  login() {
    this.firebaseAuthService.loginFacebook();
  }
}
