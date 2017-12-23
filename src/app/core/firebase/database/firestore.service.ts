import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn
} from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';

@Injectable()
export abstract class FirestoreService<ItemClass> {

  private PATH: string;

  set COLLECTION_PATH(path: string) {
    this.PATH = path;
  }

  constructor(private afs: AngularFirestore) {}

  doc$(id: string): AngularFirestoreDocument<ItemClass> {
    return this.afs.doc(`${this.PATH}/${id}`);
  }

  col$(queryFn?: QueryFn): AngularFirestoreCollection<ItemClass> {
    return this.afs.collection(this.PATH, queryFn);
  }

  colWithIds$(queryFn?: QueryFn): Observable<ItemClass[]> {
    return this.col$(queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ItemClass;
        data['id'] = a.payload.doc.id;
        return data;
      });
    });
  }
}
