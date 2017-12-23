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

  getItem (path: string, id: string): Observable<ItemClass> {
    return super.doc$(path, id).valueChanges();
  }

  insertItem (path: string, item: ItemClass): Promise<DocumentReference> {
    return super.col$(path).add(item);
  }

  updateItem (path: string, id: string, data: any): Promise<void> {
    return super.doc$(path, id).update(data);
  }

  upsertItem(path: string, id: string, data: any) {
    return super.doc$(path, id).set(data, {merge: true});
  }

  setItem (path: string, id: string, data: any): Promise<void> {
    return super.doc$(path, id).set(data);
  }

  deleteItem (path: string, id: string): Promise<void> {
    return super.doc$(path, id).delete();
  }

  getItems (path: string, queryFn?: QueryFn): Observable<ItemClass[]> {
    return super.colWithIds$(path, queryFn);
  }
}
