import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {SnackBarService} from '../../../shared/feedback/snackbar.service';
import {Router} from '@angular/router';

@Injectable()
export class FirebaseAuthService {

  constructor(
    public afAuth: AngularFireAuth,
  ) { }

  providerFacebook() {
    return new firebase.auth.FacebookAuthProvider();
  }

  loginFacebook(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginEmail(email, password): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
