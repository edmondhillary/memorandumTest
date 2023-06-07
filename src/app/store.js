// /src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from '../features/movies/moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);
