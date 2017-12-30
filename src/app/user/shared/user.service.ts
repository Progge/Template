import {Injectable} from '@angular/core';
import {FirebaseDatabaseService} from '../../core/firebase/database/firebase-database.service';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { SnackBarService } from '../../shared/feedback/snackbar.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../core/firebase/auth/firebase-auth.service';

@Injectable()
export class UserService {
  user: Observable<User>;
  private readonly PATH: string = 'users';

  constructor(
    private db: FirebaseDatabaseService<User>,
    private router: Router,
    private snackBarService: SnackBarService,
    private auth: FirebaseAuthService,
  ) {
    this.setUser();
  }

  get isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout(): void {
    this.auth.logout();
    this.user = Observable.of(null);
    this.snackBarService.showSnackBar('error', 'logout');
  }

  loginEmail(email: string, password: string) {
    this.auth.loginEmail(email, password)
      .then((success) => {
        console.log(success);
        this.setUser();
        this.snackBarService.showSnackBar('success', 'login');
      }).catch((error) => {
        console.log(error);
      });
  }

  loginFacebook() {
    this.auth.loginFacebook()
      .then((credential) => {
        console.log(credential);
        this.updateUser(credential.user);
        this.setUser();
        this.snackBarService.showSnackBar('success', 'login');
      });
  }

  loginGoogle() {
    this.auth.loginGoogle()
      .then((credential) => {
        this.updateUser(credential.user);
        this.setUser();
      });
    this.snackBarService.showSnackBar('success', 'login');
  }

  signUp(phone: string, email: string, password: string, repeat: string) {
    if (password !== repeat) { return; }
    this.auth.signUp(email, password)
      .then(user => {
        this.updateUser({
          ...user,
          phoneNumber: phone,
        });
        this.setUser();
        this.snackBarService.showSnackBar('success', 'sign-up');
      });
  }

  private updateUser(user) {
    let data: User = {
      uid: user.uid,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      emailVerified: null,
      photoURL: user.photoURL,
    };
    data = this.cleanData(data);
    this.db.upsertItem(this.PATH, user.uid, data);
  }

  private cleanData(data) {
    Object.keys(data).forEach((key) => (data[key] == null) && delete data[key]);
    return data;
  }

  private setUser() {
    this.user = this.auth.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.db.getItem(this.PATH, user.uid);
        } else {
          return Observable.of(null);
        }
      });
  }
}
