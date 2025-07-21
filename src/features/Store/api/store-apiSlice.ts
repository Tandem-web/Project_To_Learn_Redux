import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductApi, ProductsApi } from '../model/types'
export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.escuelajs.co/api/v1',
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json')
            headers.set('Content-Type', 'application/json')
            return headers
        }
    }),

    tagTypes: ['Product', 'Favorite', 'CartProduct'],

    endpoints: (builder) => ({
        getProducts: builder.query<ProductsApi, void>({
            query: () => '/products',
            providesTags: ['Product']
        }),
        getProductById: builder.query<ProductApi, ProductApi['id']>({
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }]
        }),
        getCartProductById: builder.query<ProductApi, ProductApi['id']>({
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{type: 'CartProduct', id}]
        })
    })
})
export const { 
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCartProductByIdQuery,
    useLazyGetProductByIdQuery,
    useLazyGetCartProductByIdQuery 
} = api