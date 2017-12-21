import { Injectable } from '@angular/core';
import {FirebaseDatabaseService} from '../../core/firebase/database/firebase-database.service';
import {Hero} from './hero.model';

@Injectable()
export class HeroService extends FirebaseDatabaseService<Hero> {
  COLLECTION_PATH = 'heroes';
}
