import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {SnackBarService} from '../../../shared/feedback/snackbar.service';
import {Router} from '@angular/router';

@Injectable()
export class FirebaseAuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private snackBarService: SnackBarService,
  ) { }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => {
        this.snackBarService.showSnackBar('success', 'login');
        console.log(success);
      }).catch((error) => {
        console.log(error);
    });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => {
        this.snackBarService.showSnackBar('success', 'login');
        console.log(success);
      }).catch((error) => {
      console.log(error);
    });;
  }

  loginEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.snackBarService.showSnackBar('success', 'login');
        console.log(success);
      }).catch((error) => {
        console.log(error);
    });
  }

  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((success) => {
        this.snackBarService.showSnackBar('success', 'sign-up');
        console.log(success);
      }).catch((error) => {
        console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
    this.snackBarService.showSnackBar('error', 'logout');
  }
}
