import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Crea un thunk para realizar la petición de inicio de sesión
export const loginAsync = createAsyncThunk('auth/loginAsync', async (data, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      'http://192.168.217.123:8080/alfresco/api/-default-/public/authentication/versions/1/tickets',
      data,
      config
    );

    return response.data.entry.id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ticket: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.ticket = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;