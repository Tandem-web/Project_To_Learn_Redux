"use strict";
exports.__esModule = true;
exports.changeShowingState = exports.Showing = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.Showing = {
    FAVORITE: 'favorite',
    PRODUCTS: 'products',
    CART: 'cart'
};
var initialState = {
    showingState: exports.Showing.PRODUCTS
};
var storeState = toolkit_1.createSlice({
    name: 'store-state',
    initialState: initialState,
    reducers: {
        changeShowingState: function (state, action) {
            state.showingState = action.payload;
        }
    }
});
exports.changeShowingState = storeState.actions.changeShowingState;
exports["default"] = storeState.reducer;
