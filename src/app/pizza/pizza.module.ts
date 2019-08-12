import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PizzaOrderComponent } from '../pizza/pizza-order/pizza-order.component'
import { pizzaReducer } from '../pizza/pizza-order/pizza.reducer';

@NgModule({
  declarations: [
    PizzaOrderComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('pizza', pizzaReducer)
  ],
  exports: [
    PizzaOrderComponent
  ]
})
export class PizzaModule { }
