import { Injectable } from '@angular/core';
import {Hero} from './hero.model';
import { FirebaseDatabaseService } from '../../core/firebase/database/firebase-database.service';
import {QueryFn} from 'angularfire2/firestore';
import {FirebaseStorageService} from '../../core/firebase/storage/firebase-storage.service';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../user/shared/user.service';

@Injectable()
export class HeroService {
  private readonly PATH: string = 'heroes';
  constructor(private db: FirebaseDatabaseService<Hero>, private firebaseStorageService: FirebaseStorageService,
              private userService: UserService) {
  }

  createHero(hero: Hero) {
    return this.db.insertItem(this.PATH, hero);
  }

  getHeroes() {
    return this.db.getItems(this.PATH);
  }

  getHero(id) {
    return this.db.getItem(this.PATH, id);
  }

  getHeroesByUserId(authorUserId: string) {
    return this.db.getItems(this.PATH, ref => ref.where('authorUserId', '==', authorUserId));
  }

  updateHero(hero: Hero, id?: string ) {
    if (id) {
      return this.db.updateItem(this.PATH, id, hero);
    }else {
      return this.db.updateItem(this.PATH, hero.id, hero);
    }
  }

  deleteHero(id: string): Promise<any> {
    return this.db.deleteItem(this.PATH, id);
  }

  canEditHero(hero: Hero): Observable<boolean> {
    return Observable.zip(this.userService.getUserById(hero.authorUserId), this.userService.currentUser).map(pair => {
      const author = pair[0];
      const currentUser = pair[1];
      if ((author && currentUser) && (author.uid === currentUser.uid)) {
        return true;
      } else {
        return false;
      }
    });
  }

}
