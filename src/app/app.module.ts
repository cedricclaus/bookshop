import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogRootComponent } from './catalog/catalog-root/catalog-root.component';
import { CatalogListComponent } from './catalog/catalog-list/catalog-list.component';
import { CatalogBookComponent } from './catalog/catalog-book/catalog-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogRootComponent,
    CatalogListComponent,
    CatalogBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
