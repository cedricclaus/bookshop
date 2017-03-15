/**
 * Created by ccc on 14-Mar-17.
 */
import {NgModule} from "@angular/core";
import {RouterModule,  Routes} from "@angular/router";

const routes :Routes= [
  {path:'cart',  loadChildren:'app/cart/cart.module#CartModule'},
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
