"use strict";
exports.__esModule = true;
exports.toggleFavorite = void 0;
// features/Store/slices/product-slice.ts
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    favorites: {}
};
var productSlice = toolkit_1.createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        toggleFavorite: function (state, action) {
            var id = action.payload;
            state.favorites[id] = !state.favorites[id];
        }
    }
});
exports.toggleFavorite = productSlice.actions.toggleFavorite;
exports["default"] = productSlice.reducer;
