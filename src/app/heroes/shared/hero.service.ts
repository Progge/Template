import { Injectable } from '@angular/core';
import {FirebaseDatabaseService} from '../../core/firebase/database/firebase-database.service';
import {Hero} from './hero.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService extends FirebaseDatabaseService<Hero> {
  COLLECTION_NAME = 'heroes';

  getHeroes(): Observable<Hero[]> {
    return super.getItems();
  }
}
