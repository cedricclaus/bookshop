import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogService} from "../../core/services/catalog.service";
import {Book} from "../../core/model/book.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit, OnDestroy {

  book : Book;

  paramsSunscription : Subscription;
  bookSubscription : Subscription;

  constructor(private route : ActivatedRoute, private catalog : CatalogService) { }

  ngOnInit() {
   this.paramsSunscription =  this.route.params.subscribe(
     params => {
       this.bookSubscription && this.bookSubscription.unsubscribe();
       this.bookSubscription = this.catalog.getBook(params['id']).subscribe(
         book => this.book = book
       )
  })}


  ngOnDestroy(): void {
    this.paramsSunscription && this.paramsSunscription.unsubscribe();
  }
}
