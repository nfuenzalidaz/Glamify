import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = '/user';

const initialState = {
	loading: false,
	allUsers: [],
	allUsersCopy: [],
	filteredUsers: [],
	googleUsers: [],
	auth0Users: [],
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

export const searchUsersByName = createAsyncThunk(
	'user/searchUsersByName',
	async (name, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`${URL}?name=${name}`);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`/user/${userData.id}`);
			return response.data;
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
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.allUsers = action.payload;
			state.allUsersCopy = action.payload;
			state.filteredUsers = action.payload;
			state.allUsers = action.payload;
			state.googleUsers = action.payload.filter((user) =>
				user.id.startsWith('google-oauth2')
			);
			state.auth0Users = action.payload.filter((user) =>
				user.id.startsWith('auth0')
			);
			state.error = '';
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		});
		builder.addCase(searchUsersByName.pending, (state) => {
			state.pending = true;
			state.error = '';
		});
		builder.addCase(searchUsersByName.fulfilled, (state, action) => {
			state.loading = false;
			state.allUsers = action.payload;
			state.error = '';
		});
		builder.addCase(searchUsersByName.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		});
	},
});

export default userSlice.reducer;
