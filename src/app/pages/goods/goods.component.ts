import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/shared/services/database.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {


  products: Observable<any[]> | undefined;
  constructor(private _snackBar: MatSnackBar, private service : DbService, private afs: AngularFirestore) {

  }
  ngOnInit(): void {
    this.refreshGridOnInit();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  refreshGrid(category: any){
    this.products= this.service.getProductbyCategory(category.index);
  }
  refreshGridOnInit(){
    this.products= this.service.getProductbyCategory(0);
  }
  addToCart(id: string, product: any): void{
    id = this.afs.createId();
    this.afs.collection('Cart').doc(id).set({id:id,aru_nev:product});
  }
  quantity :number= 0;
  plus(){
   
    this.quantity++;
  }
minus(){
  if(this.quantity>0)
this.quantity--;
}

 
  
}
