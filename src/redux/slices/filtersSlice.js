import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryFilter: null,
    priceRangeFilter: null,
    puntuactionFilter: null,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload
        },
        setPriceRangeFilter: (state, action) => {
            state.priceRangeFilter = action.payload
        },
        setPuntuactionFilter: (state, action) => {
            state.puntuactionFilter = action.payload
        },
        clearFilters: (state) => {
            state.categoryFilter = null
            state.priceRangeFilter = null
            state.puntuactionFilter = null
        }
    }
})

export const { setCategoryFilter, setPriceRangeFilter, setPuntuactionFilter } = filterSlice.actions;
export default filterSlice.reducer;