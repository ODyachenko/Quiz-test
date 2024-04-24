import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const movieSearchAPI = createApi({
  reducerPath: 'movieSearchAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://www.omdbapi.com/`,
  }),
  endpoints: (builder) => ({
    getMovieByName: builder.query<string, string>({
      query: (name) => `?s=${name}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
  }),
});

export const { useGetMovieByNameQuery } = movieSearchAPI;
