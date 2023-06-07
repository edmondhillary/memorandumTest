// /src/features/movies/moviesApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY = "e4e1ecc0b155dbe00e434c7125de75ba";
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `movie/popular?api_key=tu_api_key`,
    }),
    searchMovies: builder.query({
      query: (searchQuery) => `search/movie?query=${searchQuery}&api_key=${API_KEY}`,
    }),
  }),
});

// Exportamos los hooks para utilizarlos en nuestros componentes
export const { useGetPopularMoviesQuery, useSearchMoviesQuery } = moviesApi;
