import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogBookComponent} from "./catalog-book/catalog-book.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {CatalogRootComponent} from "./catalog-root/catalog-root.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CatalogRootComponent,
    CatalogListComponent,
    CatalogBookComponent
  ],
  exports : [
    CatalogRootComponent
  ]
})
export class CatalogModule { }
