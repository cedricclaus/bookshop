import { Injectable } from '@angular/core';
import {CartRow} from "../model/cart-row.model";
import {Book} from "../model/book.model";
import {Router} from "@angular/router";

@Injectable()
export class CartService {

  rows : CartRow[] = [];

  constructor(private router:Router){

  }

  add(book:Book, quantity:number = 1){
    this.rows.push(new CartRow(book,quantity));
    this.router.navigate(['/cart/content']);

  }



}
