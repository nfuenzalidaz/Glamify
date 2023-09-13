import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import filtersReducer from "./filters/filtersSlice";

/* Podriamos usar esta forma si tenemos muchos slices
 const rootReducer = combineReducers({
     cart: cartSlice,
     products: productsSlice,
     filters: filtersSlice
})
*/

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        filters: filtersReducer
    }
})