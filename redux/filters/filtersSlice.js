const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filters: {
        category: "",
        priceRange: ""
    }
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryFilter: (state, action) => {

        },
        setPriceRange: (state, action) => { },
    }
})

export const { setCategoryFilter, setPriceRange } = filtersSlice.actions;
export default filtersSlice.reducer;