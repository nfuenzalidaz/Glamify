import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = '/purchase';

const initialState = {
  loading: false,
  allPurchases: [],
  purchasesDetail: [],
  error: '',
};

export const fetchAllPurchases = createAsyncThunk(
  'purchases/fetchAllPurchases',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchPurchaseDetail = createAsyncThunk(
  'purchases/fetchPurchaseDetail',
  async (purchaseId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/${purchaseId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const purchaseSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPurchases.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAllPurchases.fulfilled, (state, action) => {
        state.loading = false;
        state.allPurchases = action.payload;
      })
      .addCase(fetchAllPurchases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPurchaseDetail.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchPurchaseDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.purchasesDetail = action.payload;
      })
      .addCase(fetchPurchaseDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default purchaseSlice.reducer;
