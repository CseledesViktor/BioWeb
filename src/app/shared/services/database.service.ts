import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {User } from '../models/User';
import {Product} from  '../models/Product'

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(
          private firestoredb: AngularFirestore,
          private storage: AngularFireStorage

      )
   {
       
   }
  
  getDatabaseList(name:string)
  {
    return this.firestoredb.collection(name).valueChanges({ idField: 'propertyId' });
  }

  getUserbyId(id:string)
  {
    return this.firestoredb.collection<User>("user").doc(id).valueChanges();
  }

  getUserbyCurrentID(){
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    return this.firestoredb.collection<User>('user').doc(user.uid).valueChanges();
  }

  getProductbyCategory(category:number){
    return this.firestoredb.collection('Products', ref=>ref.where('type', '==', category)).valueChanges({ idField: 'propertyId' });
  }
  getPicutre(picURL: string){
    return this.storage.ref(picURL).getDownloadURL();
  }

/*
  createnewUser(data: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestoredb
        .collection("user")
        .doc(data.id)
        .set(data);
    }).then(resolve =>{
      console.log('Sikers regisztracio');
      console.log(resolve);
      //this.router.navigateByUrl("/profile");
    }).catch(reject =>
      {
        console.error(reject);
        //this.router.navigateByUrl("/signup");
      });
  }*/


/*
  createNewComment(data:Comment)
  {
    return this.firestoredb.collection('comment').add(data).then(()=>{
      console.log('Sikeres torrent hozzaadas');
    }).catch(error =>{
      console.error(error);
    });
  }


*/
}