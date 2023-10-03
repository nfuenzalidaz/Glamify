import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = '/user';

const initialState = {
	allUsers: [],
	error: '',
};

export const fetchUsers = createAsyncThunk(
	'user/fetchUsers',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(URL);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.allUsers = [];
			state.error = '';
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.allUsers = action.payload;
			state.error = '';
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.allUsers = [];
			state.error = action.payload.error;
		});
	},
});

export default userSlice.reducer;
