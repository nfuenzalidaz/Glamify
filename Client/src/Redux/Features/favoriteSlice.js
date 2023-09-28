import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "/favorites";

const initialState = {
    loading: false,
    favorites: [],
    filteredFavorites: [],
    error: '',
};

export const fetchFavoritesByUser = createAsyncThunk(
    'favorites/fetchFavoritesByUser', async (UserId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${URL}/${UserId}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const createFavorites = createAsyncThunk(
    'favorites/createFavorites', async ({ UserId, ProductId }, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await axios.post(URL, { UserId, ProductId });
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const deleteFavorite = createAsyncThunk(
    'favorites/deleteFavorite', async (favoriteId, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await axios.delete(`${URL}/${favoriteId}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        favoriteSort: (state, action) => {
            const { favorites, filteredFavorites } = state;
            const sortOrder = action.payload;

            const listToSort = filteredFavorites.length ? 'filteredFavorites' : 'favorites';

            if (sortOrder === 'asc') {
                state[listToSort].sort((a, b) => a.Product.name.localeCompare(b.Product.name));
            } else if (sortOrder === 'desc') {
                state[listToSort].sort((a, b) => b.Product.name.localeCompare(a.Product.name));
            } else if (sortOrder === 'precioMin') {
                state[listToSort].sort((a, b) => a.Product.price - b.Product.price);
            } else if (sortOrder === 'precioMax') {
                state[listToSort].sort((a, b) => b.Product.price - a.Product.price);
            }
        },
        resetFilters: (state, action) => {
            state.filteredFavorites = state.favorites;
        },
        favoriteType: (state, action) => {
            const { favorites } = state;
            state.filteredFavorites = favorites.filter(fav => fav.Product.category === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoritesByUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchFavoritesByUser.fulfilled, (state, action) => {
            state.loading = false;
            state.favorites = action.payload;
            state.error = '';
        });
        builder.addCase(fetchFavoritesByUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        });

        builder.addCase(createFavorites.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createFavorites.fulfilled, (state, action) => {
            state.loading = false;
            state.favorites.push(action.payload);
            state.error = '';
        });
        builder.addCase(createFavorites.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        });

        builder.addCase(deleteFavorite.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteFavorite.fulfilled, (state, action) => {
            state.loading = false;
            // Accede al argumento (favoriteId) que pasaste a la acción
            const favoriteToDeleteId = action.meta.arg;
            state.favorites = state.favorites.filter(favorite => favorite.id !== favoriteToDeleteId);
            state.error = '';
        });
        builder.addCase(deleteFavorite.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        });
    }
});

export const { favoriteSort, resetFilters, favoriteType } = favoriteSlice.actions;

export default favoriteSlice.reducer