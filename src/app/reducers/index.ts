import { ActionReducerMap } from '@ngrx/store'
import { pizzaReducer } from '../pizza/pizza-order/pizza.reducer';

export const reducers: ActionReducerMap<any> = {
    pizza: pizzaReducer
}