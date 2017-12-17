import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {SnackBarService} from '../../../shared/feedback/snackbar.service';

@Injectable()
export class FirebaseAuthService {

  constructor(public afAuth: AngularFireAuth, private snackBarService: SnackBarService) {
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => {
        this.snackBarService.showSuccessSnackBar('Du är nu inloggad med Facebook.');
        console.log(success);
      }).catch((error) => {
        this.snackBarService.showErrorSnackBar('Något gick snett vid inloggning med Facebook.');
        console.log(error);
    });
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => {
        this.snackBarService.showSuccessSnackBar('Du är nu inloggad med Google.');
        console.log(success);
      }).catch((error) => {
      this.snackBarService.showErrorSnackBar('Något gick snett vid inloggning med Google.');
      console.log(error);
    });;
  }

  loginEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.snackBarService.showSuccessSnackBar('Du är nu inloggad med Email.');
        console.log(success);
      }).catch((error) => {
        this.snackBarService.showErrorSnackBar('Något gick snett vid inloggning med Email');
        console.log(error);
    });
  }

  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((success) => {
        this.snackBarService.showSuccessSnackBar('Ditt nya konto har skapats.');
        console.log(success);
      }).catch((error) => {
        this.snackBarService.showErrorSnackBar('Något gick snett vid skapandet av konto.');
        console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.snackBarService.showSuccessSnackBar('Du har loggats ut.');
  }
}
