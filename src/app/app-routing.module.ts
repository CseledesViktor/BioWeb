import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lazy-loading
const routes: Routes = [
  { path: 'not-found',
   loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'login',
   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup',
   loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'goods',
   loadChildren: () => import('./pages/goods/goods.module').then(m => m.GoodsModule) },
  { path: 'product',
   loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
   { path: 'wishlist',
   loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule) },
  { path: 'contact',
   loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
   { path: 'cart',
   loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
