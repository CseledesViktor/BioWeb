import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore) {
  }
    collectionName = 'Cart';
  // CRUD (Create, Read, Update, Delete)

  getByEmail(email: string) {
    return this.afs.collection<Cart>(this.collectionName).doc(email);
  }

  getAll() {
    return this.afs.collection<Cart>(this.collectionName).valueChanges();
}

  delete(id: string) {
    return this.afs.collection<Cart>(this.collectionName).doc(id).delete();
  }

}