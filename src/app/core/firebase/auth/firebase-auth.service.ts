import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthService {

  private auth;

  constructor(public afAuth: AngularFireAuth) {
    this.auth = afAuth.auth;
  }

  isLoggedIn(): boolean {
    return !!this.auth.currentUser;
  }

  loginFacebook(): Promise<any> {
    return this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle(): Promise<any> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginEmail(email, password): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password): Promise<any> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.auth.signOut();
  }
}
