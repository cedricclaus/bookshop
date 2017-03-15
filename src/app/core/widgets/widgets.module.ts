import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CartSummaryComponent],
  declarations: [CartSummaryComponent]
})
export class WidgetsModule { }
