import { Injectable, OnInit } from '@angular/core';
import { QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FirestoreService } from './firestore.service';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

/**
 * Abstract class for Database Communication
 */

@Injectable()
export class DatabaseService<ItemClass> extends FirestoreService<ItemClass> {

  getItem (id: string): Observable<ItemClass> {
    return super.doc$(id).valueChanges();
  }

  addItem (item: ItemClass): Promise<DocumentReference> {
    return super.col$().add(item);
  }

  updateItem (id: string, new_data: any): Promise<void> {
    return super.doc$(id).update(new_data);
  }

  deleteItem (id: string): Promise<void> {
    return super.doc$(id).delete();
  }

  getItems (queryFn?: QueryFn): Observable<ItemClass[]> {
    return super.colWithIds$(queryFn);
  }
}
