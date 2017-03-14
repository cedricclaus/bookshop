import { Component, OnInit } from '@angular/core';
import {Book} from "../../core/model/book.model";
import {CatalogService} from "../../core/services/catalog.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  constructor(private catalogService : CatalogService) { }

  books$;

  ngOnInit() {
   this.books$ = this.catalogService.getList();
  }

}
