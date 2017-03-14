/**
 * Created by ccc on 14-Mar-17.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatalogRootComponent} from "./catalog/catalog-root/catalog-root.component";

const routes = [
  {path: 'catalog', component: CatalogRootComponent},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'}
]

@NgModule(
  {
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
