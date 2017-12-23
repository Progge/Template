import {Injectable, Provider} from '@angular/core';
import {FirebaseDatabaseService} from '../../core/firebase/database/firebase-database.service';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { SnackBarService } from '../../shared/feedback/snackbar.service';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../core/firebase/auth/firebase-auth.service';

@Injectable()
export class UserService {
  user: Observable<User>;

  constructor(
    private db: FirebaseDatabaseService<User>,
    private router: Router,
    private snackBarService: SnackBarService,
    private auth: FirebaseAuthService,
  ) {
    db.COLLECTION_PATH = 'users';
    this.setUser();
  }

  loginEmail(email: string, password: string) {
    this.auth.loginEmail(email, password)
      .then((success) => {
        console.log(success);
        this.setUser();
      }).catch((error) => {
        console.log(error);
      });
  }

  loginFacebook() {
    this.auth.loginFacebook()
      .then((credential) => {
        this.updateUser(credential.user);
        this.setUser();
      });
  }

  loginGoogle() {
    this.auth.loginGoogle()
      .then((credential) => {
        this.updateUser(credential.user);
        this.setUser();
      });
  }

  signUp(phone: string, email: string, password: string, repeat: string) {
    if (password !== repeat) { return; }
    this.auth.signUp(email, password)
      .then(user => {
        this.updateUser(user);
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
    this.db.upsertItem(user.uid, data);
  }

  private cleanData(data) {
    Object.keys(data).forEach((key) => (data[key] == null) && delete data[key]);
    return data;
  }

  private setUser() {
    this.user = this.auth.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.db.getItem(user.uid);
        }
        return Observable.of(null);
      });
  }
}
