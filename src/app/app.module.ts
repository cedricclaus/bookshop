import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CatalogModule} from "./catalog/catalog.module";
import {ServicesModule} from "./core/services/services.module";
import {AppRoutingModule} from "./app-routing.module";
import {CartModule} from "./cart/cart.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CatalogModule,
    ServicesModule,
    AppRoutingModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
