import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogService} from "./catalog.service";
import {CartService} from "./cart.service";
import {ActionService} from "./action.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [CatalogService, CartService,ActionService],
  declarations: []
})
export class ServicesModule { }
