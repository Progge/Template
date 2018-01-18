import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn
} from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

@Injectable()
export abstract class FirestoreService<ItemClass> {

  constructor(private afs: AngularFirestore) {}

 /* addItem(path: string, item: ItemClass): Promise<DocumentReference> {
    return this.afs.collection(path).add(<Object> item);
  }

  addItemWithId(path: string, item: ItemClass, id: string): Promise<void> {
    return this.afs.collection(path).doc(id).set(item);
  }*/

  doc$(path: string, id: string): AngularFirestoreDocument<ItemClass> {
    return this.afs.doc(`${path}/${id}`);
  }

  col$(path: string, queryFn?: QueryFn): AngularFirestoreCollection<ItemClass> {
    return this.afs.collection(path, queryFn);
  }

  colWithIds$(path: string, queryFn?: QueryFn): Observable<ItemClass[]> {
    return this.col$(path, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ItemClass;
        data['id'] = a.payload.doc.id;
        return data;
      });
    });
  }
}
