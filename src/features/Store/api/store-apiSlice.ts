import { BaseQueryFn, createApi, fetchBaseQuery, FetchBaseQueryError, QueryReturnValue } from '@reduxjs/toolkit/query/react'
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
        getCartProductsByIds: builder.query<ProductsApi, Array<ProductApi["id"]>>({
            //@ts-ignore
            async queryFn(ids, api, extraOptions, baseQuery) {
                const requests = ids.map(id => 
                    baseQuery(`/products/${id}`)
                );
                const responses = await Promise.all(requests);
                // Проверяем, есть ли ошибки в ответах
                const hasError = responses.some(response => response.error);
                if (hasError) {
                    return { error: { status: 'FETCH_ERROR', message: 'Ошибка при получении продуктов' } };
                }
                // Извлекаем данные из успешных ответов
                const products = responses.map(response => response.data);
                return { data: products as ProductsApi };
            },
        }),
    })
})
export const { 
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetCartProductsByIdsQuery,
    useLazyGetProductByIdQuery,
    useLazyGetCartProductsByIdsQuery 
} = api