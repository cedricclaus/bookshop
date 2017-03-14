import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../core/services/catalog.service";
import {Book} from "../../core/model/book.model";
import {Subscription} from "rxjs";
import "rxjs/add/operator/switchMap"
import "rxjs/add/operator/do"
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit, OnDestroy {

  book : Book;

  subscription : Subscription;

  constructor(private route : ActivatedRoute
    , private catalog : CatalogService, private title:Title) { }



  ngOnInit() {
   this.subscription = this.route.params
     .switchMap(params => this.catalog.getBook(params["id"])).do(book => this.title.setTitle("Livre : " + book.title) )
     .subscribe(book => this.book=book);
  }


  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }


}
