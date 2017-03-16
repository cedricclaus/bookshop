import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ErrorComponent } from './error/error.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CartSummaryComponent,ErrorComponent,ControlComponent],
  declarations: [CartSummaryComponent, ErrorComponent, ControlComponent]
})
export class WidgetsModule { }
