import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
        })
    })
})
