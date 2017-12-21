import { Injectable } from '@angular/core';
import {FirebaseAuthService} from '../../../core/firebase/auth/firebase-auth.service';
import {SnackBarService} from '../../../shared/feedback/snackbar.service';
import {Router} from '@angular/router';
import {UserService} from '../../shared/user.service';

@Injectable()
export class LoginService {

  constructor(
    private router: Router,
    private snackBarService: SnackBarService,
    private auth: FirebaseAuthService,
    private userService: UserService,
  ) {}

  loginEmail(email: string, password: string) {
    this.auth.loginEmail(email, password);
  }

  loginFacebook() {
    this.auth.loginFacebook();
  }

  loginGoogle() {
    this.auth.loginGoogle();
  }

  signUp(email: string, password: string, repeat: string) {
    if (password !== repeat) { return; }
    this.auth.signUp(email, password);
    this.userService.addItem(JSON.parse(JSON.stringify(this.auth.afAuth.auth.currentUser)));
    this.router.navigate(['']);
    this.snackBarService.showSnackBar('error', 'logout');
  }
}


/*
.then((success) => {
  this.snackBarService.showSnackBar('success', 'sign-up');
  console.log(success);
}).catch((error) => {
  console.log(error);
});*/
