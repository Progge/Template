import { Injectable, OnInit } from '@angular/core';
import { QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from './firestore.service';

/**
 * Abstract class for Database Communication
 */

@Injectable()
export abstract class FirebaseDatabaseService<ItemClass> extends FirestoreService<ItemClass> {

  abstract readonly COLLECTION_PATH: string;

  getItem (id: string): Observable<ItemClass> {
    return super.doc$(this.COLLECTION_PATH + '/' + id).valueChanges();
  }

  addItem (item: ItemClass): void {
    super.col$(this.COLLECTION_PATH).add(item);
  }

  updateItem (id: string, new_data: any): void {
    super.doc$(this.COLLECTION_PATH + '/' + id).update(new_data);
  }

  deleteItem (id: string): void {
    super.doc$(this.COLLECTION_PATH + '/' + id).delete();
  }

  getItems (queryFn?: QueryFn, search?: string): Observable<ItemClass[]> {
    return super.colWithIds$(this.COLLECTION_PATH, queryFn);
  }
}
