import { Injectable } from '@angular/core';
import {FirebaseAuthService} from '../firebase/auth/firebase-auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private firebaseAuthService: FirebaseAuthService) { }

  get isLoggedIn(): boolean {
    return this.firebaseAuthService.isLoggedIn();
  }

  get isAdmin(): boolean {
    return false;
  }

  logout() {
    this.firebaseAuthService.logout();
  }
}
