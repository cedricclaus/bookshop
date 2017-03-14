/**
 * Created by ccc on 14-Mar-17.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes = [

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
