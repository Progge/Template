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
export class FirebaseDatabaseService<ItemClass> extends FirestoreService<ItemClass> {

  getTimestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  getItem (id: string): Observable<ItemClass> {
    return super.doc$(id).valueChanges();
  }

  insertItem (item: ItemClass): Promise<DocumentReference> {
    return super.col$().add(item);
  }

  updateItem (id: string, data: any): Promise<void> {
    return super.doc$(id).update(data);
  }

  upsertItem(id: string, data: any) {
    return super.doc$(id).set(data, {merge: true});
  }

  setItem (id: string, data: any): Promise<void> {
    return super.doc$(id).set(data);
  }

  deleteItem (id: string): Promise<void> {
    return super.doc$(id).delete();
  }

  getItems (queryFn?: QueryFn): Observable<ItemClass[]> {
    return super.colWithIds$(queryFn);
  }
}
