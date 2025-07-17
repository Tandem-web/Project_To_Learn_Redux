import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/FirstRedux component/counterSlice';
// import productReducer from '../features/Store/slices/shit/product-slice';
import productReducer from '../features/Store/slices/rtk-product-slice';
import storeStateReducer from '../features/Store/slices/store-state-slice';
import cartReducer from '../features/Store/slices/rtk-cart-slice';
// import storeFavoriteReducer from '../features/Store/slices/shit/favorite-slice';
import { api } from '../features/Store/api/store-apiSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [api.reducerPath]: api.reducer,
        products:  productReducer,
        storeState: storeStateReducer,
        cart: cartReducer
        // favorite:  storeFavoriteReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;