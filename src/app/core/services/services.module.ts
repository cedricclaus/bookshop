import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogService} from "./catalog.service";
import {CartService} from "../service/cart.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [CatalogService, CartService],
  declarations: []
})
export class ServicesModule { }
