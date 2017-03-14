/**
 * Created by ccc on 14-Mar-17.
 */
/**
 * Created by ccc on 14-Mar-17.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatalogRootComponent} from "./catalog-root/catalog-root.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {CatalogBookComponent} from "./catalog-book/catalog-book.component";


const routes = [
  {
    path: 'catalog',
    component: CatalogRootComponent,
    children : [
      { path : 'list', component : CatalogListComponent },
      { path : 'book/:id', component : CatalogBookComponent },
      { path : '', redirectTo: 'list', pathMatch: 'full'},
    ]
  }
]

@NgModule(
  {
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  }
)
export class CatalogRoutingModule {

}

