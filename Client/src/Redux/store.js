import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Features/productSlice';
import cartSlice from './Features/cartSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartSlice,
    },
});

export default store;