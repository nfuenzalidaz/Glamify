import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = '/review';

const initialState = {
    loading: false,
    reviews: [],
    error: null
}

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews', async (_, thunkApi) => {
        try {
            const { data } = await axios.get(URL);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const createReview = createAsyncThunk(
    'reviews/createReview', async (newReview, thunkApi) => {
        try {
            const { data } = await axios.post(URL, newReview);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const updateReview = createAsyncThunk(
    'reviews/updateReview', async ({ id, editReview }, thunkApi) => {
        try {
            const { data } = await axios.put(`${URL}/${id}`, editReview);
            return data;
        } catch (error) {
            thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const deleteReview = createAsyncThunk(
    'reviews/deleteReview', async (id, thunkApi) => {
        try {
            await axios.delete(`${URL}/${id}`);
            return id;
        } catch (error) {
            thunkApi.rejectWithValue(error.response.data);
        }
    }
)

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createReview.fulfilled, (state, action) => {
                state.reviews.push(action.payload);
            })
            .addCase(updateReview.fulfilled, (state, action) => {
                const updatedReview = action.payload;
                const index = state.reviews.findIndex((review) => review.id === updatedReview.id);
                if (index !== -1) {
                    state.reviews[index] = updatedReview;
                }
            })
            .addCase(deleteReview.fulfilled, (state, action) => {
                const deletedReviewId = action.payload;
                state.reviews = state.reviews.filter((review) => review.id !== deletedReviewId);
            });
    },
});


export default reviewSlice.reducer;