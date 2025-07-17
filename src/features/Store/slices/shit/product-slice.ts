// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Product, ProductApi, Products, ProductsApi } from '../../model/types';
// import { error } from 'console';
// import { get_all_products } from '../../api/api';
// import { stat } from 'fs';

// interface ProductState{
//     products: Products;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: ProductState = {
//     products: [],
//     loading: false,
//     error: null
// }

// export const fetchProducts = createAsyncThunk<ProductsApi, void>(
//     'store-products/fetchProducts',
//     async (_, { rejectWithValue }) => {
//         try {
//             const data = await get_all_products();
//             return data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// const productSlice = createSlice({
//     name: 'store-products',
//     initialState: initialState,
//     reducers: {
//     },
//     extraReducers(builder) {
//         builder
//             .addCase(
//                 fetchProducts.pending,
//                 (state) => {
//                     state.loading = true;
//                     state.error = null;
//                 }
//             )
//             .addCase(
//                 fetchProducts.fulfilled,
//                 (state, action: PayloadAction<ProductsApi>) => {
//                     state.loading = false;
//                     state.products = action.payload.map((product: ProductApi) => ({
//                         ...product,
//                         isFavorite: false,
//                         inCart: false
//                     }))
//                 }
//             )
//             .addCase(
//                 fetchProducts.rejected,
//                 (state, action) => {
//                     state.loading = false;
//                     state.error = action.payload as string;
//                 }
//             )
//     },
// })
// export default productSlice.reducer;