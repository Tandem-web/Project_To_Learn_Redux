// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Product, ProductApi, Products, ProductsApi } from "../../model/types";
// import { get_product_by_id } from "../../api/shit/api";
// type TypeFavoriteLoadingState = {
//     id: Product["id"];
//     isLoading: boolean;
// }
// interface FavoriteState{
//     favoriteIds: Product["id"][],
//     favoriteProductsInfo: ProductsApi,
//     favoriteLoadingState: TypeFavoriteLoadingState[],
//     error: string | null
// }
// const initialState: FavoriteState = {
//     favoriteIds: [],
//     favoriteProductsInfo: [],
//     favoriteLoadingState: [],
//     error: null
// }
// export const fetchProductDetails = createAsyncThunk<ProductApi, ProductApi["id"]>(
//     'store-favorite/fetchProductById',
//     async (id: ProductApi["id"], { rejectWithValue }) => {
//         try {
//             const data = await get_product_by_id(id);
//             return data;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );
// const favoriteSlice = createSlice({
//     name: 'store-favorite',
//     initialState: initialState,
//     reducers: {
//         toggleFavorite: (state, action: PayloadAction<Product["id"]> ) => {
//             const productId = action.payload;
//             const currentIds = state.favoriteIds;
//             const isFavorite = currentIds.includes(productId);
//             if(isFavorite){
//                 state.favoriteLoadingState = state.favoriteLoadingState.filter(state => state.id !== productId);
//                 state.favoriteIds = state.favoriteIds.filter(id => id !== productId);
//                 if(state.favoriteProductsInfo.length > 0){
//                     state.favoriteProductsInfo = state.favoriteProductsInfo.filter(state => state.id !== productId);
//                 }
//             }else{
//                 state.favoriteIds = [...state.favoriteIds, productId];
//                 state.favoriteLoadingState = [...state.favoriteLoadingState, { id: action.payload, isLoading: true }];
//             }
//         }
//     },
//     extraReducers(builder) {
//         builder
//             .addCase(fetchProductDetails.pending, (state, action) => {
//                 const id = action.meta.arg;
//                 const loadingState = state.favoriteLoadingState.find(state => state.id === id);
//                 if (loadingState) {
//                     loadingState.isLoading = true;
//                 }
//             })
//             .addCase(fetchProductDetails.fulfilled, (state, action: PayloadAction<ProductApi>) => {
//                 const id = action.payload.id;
//                 state.favoriteProductsInfo.push(action.payload);
//                 const loadingState = state.favoriteLoadingState.find(state => state.id === id);
//                 if (loadingState) {
//                     loadingState.isLoading = false;
//                 }
//             })
//             .addCase(fetchProductDetails.rejected, (state, action) => {
//                 const id = action.meta.arg;
//                 const loadingState = state.favoriteLoadingState.find(state => state.id === id);
//                 if (loadingState) {
//                     loadingState.isLoading = false;
//                 }
//                 state.error = action.error.message || 'Failed to fetch product details';
//             });
//     },
// })
// export const { toggleFavorite } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
