import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartRootComponent } from './cart-root/cart-root.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartOrderComponent } from './cart-order/cart-order.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ],
  declarations: [CartRootComponent, CartContentComponent, CartOrderComponent]
})
export class CartModule { }
