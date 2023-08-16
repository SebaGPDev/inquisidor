// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; // Importa el slice de autenticación

const store = configureStore({
  reducer: {
    auth: authReducer, // Agrega el slice de autenticación al store
  },
});

export default store;
