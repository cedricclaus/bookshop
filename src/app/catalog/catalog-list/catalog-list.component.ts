import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../core/services/catalog.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  constructor(private catalogService : CatalogService,
  private title:Title) { }

  books$;

  ngOnInit() {
   this.books$ = this.catalogService.getList();
   this.title.setTitle("Catalogue des livres");
  }

}
