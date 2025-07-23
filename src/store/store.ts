import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/FirstRedux component/counterSlice';
import productReducer from '../features/Store/slices/rtk-product-slice';
import storeStateReducer from '../features/Store/slices/store-state-slice';
import cartReducer from '../features/Store/slices/rtk-cart-slice';
import todosReducer from '../features/Todo-list/slice/todo-slice';
import { api } from '../features/Store/api/store-apiSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rhfsReducer from '../features/RHF/slice/rhf-slice';

const todosPersistConfig = {
  key: 'todos',
  storage,
};

const rootReducer = combineReducers({
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
    products: productReducer,
    storeState: storeStateReducer,
    cart: cartReducer,
    todos: persistReducer(todosPersistConfig, todosReducer),
    rhfs: rhfsReducer,
});
export type RootReducer = ReturnType<typeof rootReducer>;


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(api.middleware)
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
