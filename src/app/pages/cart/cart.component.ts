
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  content?: Observable<any>;

  constructor(private db: AngularFirestore,private cartService: CartService,private auth: AuthService) { }

  ngOnInit(): void {
    this.content = this.db.collection('Cart').valueChanges();
  }

  orderSend(id:string){
    return this.cartService.delete(id);
  }
}