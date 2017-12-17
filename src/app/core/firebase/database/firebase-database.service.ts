import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import OrderByDirection = firebase.firestore.OrderByDirection;
import WhereFilterOp = firebase.firestore.WhereFilterOp;

/**
 * Abstract class for Firestore
 */

@Injectable()
export abstract class FirebaseDatabaseService<ItemClass> {

  abstract readonly COLLECTION_NAME: string;

  private itemsCollection: AngularFirestoreCollection<ItemClass>;
  private items: Observable<ItemClass[]>;

  private itemDocument: AngularFirestoreDocument<ItemClass>;
  private item: Observable<ItemClass>;

  constructor(private afStore: AngularFirestore) {}

  getItem (id: string): Observable<ItemClass> {
    let itemDocument: AngularFirestoreDocument<ItemClass>;
    itemDocument = this.afStore.doc(this.COLLECTION_NAME + '/' + id);
    return itemDocument.valueChanges();
  }

  updateItem (id: string, new_data: any): void {
    let itemDocument: AngularFirestoreDocument<ItemClass>;
    itemDocument = this.afStore.doc(this.COLLECTION_NAME + '/' + id);
    itemDocument.update(new_data);
  }

  deleteItem (id: string): void {
    let itemDocument: AngularFirestoreDocument<ItemClass>;
    itemDocument = this.afStore.doc(this.COLLECTION_NAME + '/' + id);
    itemDocument.delete();
  }

  getItems (): Observable<ItemClass[]> {
    let itemsCollection: AngularFirestoreCollection<ItemClass>;
    itemsCollection = this.afStore.collection(this.COLLECTION_NAME);
    return itemsCollection.valueChanges();
  }

  getFilteredItems (field: string, compare: WhereFilterOp, value: any): Observable<ItemClass[]> {
    let filteredItemsCollection: AngularFirestoreCollection<ItemClass>;
    filteredItemsCollection = this.afStore.collection(this.COLLECTION_NAME, ref => {
      return ref.where(field, compare, value);
    });
    return filteredItemsCollection.valueChanges();
  }

  getOrderedItems (order_by: string, desc?: OrderByDirection): Observable<ItemClass[]> {
    let orderedItemsCollection: AngularFirestoreCollection<ItemClass>;
    orderedItemsCollection = this.afStore.collection(this.COLLECTION_NAME, ref => {
      if (desc) { return ref.orderBy(order_by, desc); }
      return ref.orderBy(order_by);
    });
    return orderedItemsCollection.valueChanges();
  }
}
