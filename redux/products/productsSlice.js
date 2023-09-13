const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = state.payload;
        },
        addProduct: (state, action) => { 
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => { },
    }
})

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;