import { Injectable } from '@angular/core';
import {Hero} from './hero.model';
import { FirebaseDatabaseService } from '../../core/firebase/database/firebase-database.service';

@Injectable()
export class HeroService {
  constructor(private db: FirebaseDatabaseService<Hero>) {
    db.COLLECTION_PATH = 'heroes';
  }

  getHeroes() {
    return this.db.getItems();
  }
}
