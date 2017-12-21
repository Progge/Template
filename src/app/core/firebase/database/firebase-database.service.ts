import { Injectable, OnInit } from '@angular/core';
import { QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from './firestore.service';
import * as firebase from 'firebase';

/**
 * Abstract class for Database Communication
 */

@Injectable()
export abstract class FirebaseDatabaseService<ItemClass> extends FirestoreService<ItemClass> {

  getItem (id: string): Observable<ItemClass> {
    return super.doc$(id).valueChanges();
  }

  addItem (item: ItemClass): void {
    super.col$().add(item);
  }

  updateItem (id: string, new_data: any): void {
    super.doc$(id).update(new_data);
  }

  deleteItem (id: string): void {
    super.doc$(id).delete();
  }

  getItems (queryFn?: QueryFn): Observable<ItemClass[]> {
    return super.colWithIds$(queryFn);
  }
}
