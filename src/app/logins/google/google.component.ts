import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../core/firebase/auth/firebase-auth.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent {

  constructor(private firebaseAuth: FirebaseAuthService) { }

  login() {
    this.firebaseAuth.loginGoogle();
  }
}
