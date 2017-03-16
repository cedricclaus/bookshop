import { Component, OnInit } from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {ActionService} from "../../core/services/action.service";

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  constructor(public cart : CartService, public action : ActionService) { }

  ngOnInit() {
  }



}
