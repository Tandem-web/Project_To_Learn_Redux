import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const Showing = {
    FAVORITE: 'favorite',
    PRODUCTS:  'products',
    CART: 'cart'
} as const;

export type Showing = typeof Showing[keyof typeof Showing];


interface InitialState{
    showingState: Showing,
}

const initialState: InitialState = {
    showingState: Showing.PRODUCTS,
}

const storeState = createSlice({
    name: 'store-state',
    initialState: initialState,
    reducers: {
        changeShowingState: (state, action: PayloadAction<Showing>) => {
            state.showingState = action.payload;
        }
    }
})

export const { changeShowingState } = storeState.actions;

export default storeState.reducer;