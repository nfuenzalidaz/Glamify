import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import filterReducer from './slices/filtersSlice'
import productsReducer from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        filters: filterReducer,
    }
})