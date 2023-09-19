import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Features/productSlice';



const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

export default store;