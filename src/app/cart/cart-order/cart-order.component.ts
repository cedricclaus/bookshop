import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {

  @ViewChild('form') form : NgForm;
  @ViewChild('last') last : NgModel;

  constructor() { }

  data = {
    identity : {},
    shipping:{},
    billing:{}
  }

  log(){
    console.log(this.form);
    console.log(this.last);
  }

  ngOnInit() {
  }

}
