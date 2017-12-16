import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseAuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        console.log(success);
      }).catch((error) => {
        console.log(error);
    });
  }

  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((success) => {
        console.log(success);
      }).catch((error) => {
        console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
