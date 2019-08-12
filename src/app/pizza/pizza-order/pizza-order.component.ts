import { Component, OnInit } from '@angular/core';
import * as actions from './pizza.actions'
import * as fromPizza from './pizza.reducer'
import { Observable } from 'rxjs';
import { Store} from '@ngrx/store';
import { Pizza } from './pizza.reducer'
 
@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {
  pizzas: Observable<any>
  large: number
  small: number
  total: number
  constructor(private store: Store<fromPizza.State>) { }

  ngOnInit() {
    this.pizzas = this.store.select(fromPizza.selectAll)
    this.pizzas.subscribe((val: Pizza[])=>{
      this.total=val.length
      this.large=val.filter(pizza=>{
        return pizza.size=='large'
      }).length
      this.small=val.filter(pizza=>{
        return pizza.size=='small'
      }).length
    })
  }

  createPizza() {
    const pizza: fromPizza.Pizza = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }

    this.store.dispatch(new actions.Create(pizza))
  }

  updatePizza(id, size) {
    this.store.dispatch(new actions.Update(id, {size: size}))
  }

  deletePizza(id) {
    this.store.dispatch(new actions.Delete(id))
  }
}
