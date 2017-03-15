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
    let found = this.rows.filter(row => row.book.equals(book))[0]
    if(found){
      found.quantity++;
    }else{
      this.rows.push(new CartRow(book,quantity));
    }
    this.router.navigate(['/cart/content']);
  }

  total(){
    return this.rows.map(row => row.amount()).reduce((total,value)=> total+value,0);
  }

  remove(row:CartRow){
    this.rows = this.rows.filter(r => r!=row);

  }

  isEmpty() : boolean{
    return this.rows.length == 0;
  }



}
