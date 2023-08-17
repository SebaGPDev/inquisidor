import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { encode } from 'base-64';
import { makePostRequest } from '../../services/Authenticate'; // Importa la función utilitaria

// Acción para realizar el inicio de sesión
export const loginAsync = createAsyncThunk('auth/loginAsync', async (data, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Utiliza la función de solicitud reutilizable
    const response = await makePostRequest(
      'http://192.168.217.253:8080/alfresco/api/-default-/public/authentication/versions/1/tickets',
      data,
      config
    );

    return response.entry.id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Acción para realizar el logout
export const logout = createAsyncThunk('auth/logout', async (_, { getState }) => {
  const state = getState();
  state.auth.ticket = null;
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
        const ticketId = action.payload;
        const base64Ticket = encode(ticketId);
        state.ticket = base64Ticket;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.ticket = null;
      });
  },
});

export default authSlice.reducer;
