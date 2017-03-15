import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../core/services/catalog.service";
import {Title} from "@angular/platform-browser";
import {CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  constructor(private catalogService : CatalogService,
  private title:Title, private cartService : CartService) { }

  books$;

  ngOnInit() {
   this.books$ = this.catalogService.getList();
   this.title.setTitle("Catalogue des livres");
  }

  buy(book){
    this.cartService.add(book);
  }

}
