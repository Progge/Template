import { Injectable } from '@angular/core';
import {Hero} from './hero.model';
import { FirebaseDatabaseService } from '../../core/firebase/database/firebase-database.service';
import {QueryFn} from 'angularfire2/firestore';

@Injectable()
export class HeroService {
  private readonly PATH: string = 'heroes';
  constructor(private db: FirebaseDatabaseService<Hero>) {
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

}
