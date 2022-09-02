import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        getProductById: builder.query({
            query: id => `/products/${id}`,
            providesTags: ['CurrentProduct']
        }),
        removeProduct: builder.mutation({
            query: id => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products']
        }),
        editProduct: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['CurrentProduct']
        }),
        addProduct: builder.mutation({
            query: product => ({
                url: '/products',
                method: 'POST',
                body: product,
            }),
            invalidatesTags: ['Products']
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useRemoveProductMutation,
    useEditProductMutation,
    useAddProductMutation,
} = api;
export default api;
