import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {  MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GoodsComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class GoodsModule { }
