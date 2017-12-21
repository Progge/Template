import { Injectable } from '@angular/core';
import {FirebaseAuthService} from '../../core/firebase/auth/firebase-auth.service';

@Injectable()
export class AuthService {

  constructor(private firebaseAuthService: FirebaseAuthService) { }

  get isLoggedIn(): boolean {
    return !!this.firebaseAuthService.afAuth.auth.currentUser;
  }

  get isAdmin(): boolean {
    return false;
  }
}
