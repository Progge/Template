import {Injectable} from '@angular/core';
import {FirebaseDatabaseService} from '../../core/firebase/database/firebase-database.service';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {FirestoreService} from '../../core/firebase/database/firestore.service';

@Injectable()
export class UserService extends FirebaseDatabaseService<User> {
  COLLECTION_PATH = 'users';
  user: Observable<User>;

  constructor(firestoreService: FirestoreService) {
    super(firestoreService);
  }
}
