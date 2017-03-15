import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogBookComponent} from "./catalog-book/catalog-book.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {CatalogRootComponent} from "./catalog-root/catalog-root.component";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {WidgetsModule} from "../core/widgets/widgets.module";

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    WidgetsModule
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
