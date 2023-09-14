import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    products: [],
    productDetail: [],
    filteredProducts: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
            state.products = action.payload
        },
        setProductById: (state, action) => {
            state.productDetail = action.payload
        },
        setProductByName: (state, action) => {
            state.products = action.payload
        },
        setFilteredProducts: (state, action) => {
            state.filteredProducts = action.payload
        }
    }
})

export const { setAllProducts, setProductById, setProductByName, setFilteredProducts } = productsSlice.actions

export default productsSlice.reducer;