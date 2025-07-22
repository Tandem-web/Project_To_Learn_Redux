"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.setQuantity = exports.decreaseQuantity = exports.increaseQuantity = exports.removeFromCart = exports.addToCart = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var store_apiSlice_1 = require("../api/store-apiSlice");
var initialState = {
    cartProductIds: [],
    cartProducts: {},
    cartInfo: {
        totalPrice: 0
    }
};
var cartSlice = toolkit_1.createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            var productId = action.payload;
            var cartProductIds = state.cartProductIds;
            if (!cartProductIds.find(function (id) { return id === productId; })) {
                state.cartProductIds = __spreadArrays(state.cartProductIds, [productId]);
            }
            // state.cartInfo.totalPrice = calculateTotalPrice(state.items);
        },
        removeFromCart: function (state, action) {
            var productId = action.payload;
            var _a = state.cartProducts, _b = productId, removedProduct = _a[_b], remainingProducts = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            state.cartProducts = remainingProducts;
            state.cartProductIds = state.cartProductIds.filter(function (id) { return id !== productId; });
            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        },
        increaseQuantity: function (state, action) {
            var productId = action.payload;
            if (state.cartProducts[productId]) {
                var item = state.cartProducts[productId];
                item.amount = Math.min(item.amount + 1, 99);
            }
            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        },
        decreaseQuantity: function (state, action) {
            var productId = action.payload;
            if (state.cartProducts[productId]) {
                var item = state.cartProducts[productId];
                item.amount = Math.max(item.amount - 1, 1);
            }
            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        },
        setQuantity: function (state, action) {
            var productId = action.payload.id;
            var quantity = action.payload.quantity;
            quantity = Math.max(1, Math.min(quantity, 99));
            if (state.cartProducts[productId]) {
                state.cartProducts[productId].amount = quantity;
            }
            state.cartInfo.totalPrice = calculateTotalPrice(Object.values(state.cartProducts));
        }
    },
    extraReducers: function (builder) {
        builder.addMatcher(store_apiSlice_1.api.endpoints.getCartProductsByIds.matchFulfilled, function (state, _a) {
            var payload = _a.payload;
            var products = payload;
            products.forEach(function (product) {
                var productId = product.id;
                if (!state.cartProducts[productId]) {
                    state.cartProducts[productId] = {
                        info: product,
                        amount: 1
                    };
                }
                state.cartInfo.totalPrice += product.price;
            });
        });
    }
});
var calculateTotalPrice = function (items) {
    return Object.values(items).reduce(function (acc, item) { return acc + item.amount * item.info.price; }, 0);
};
exports.addToCart = (_a = cartSlice.actions, _a.addToCart), exports.removeFromCart = _a.removeFromCart, exports.increaseQuantity = _a.increaseQuantity, exports.decreaseQuantity = _a.decreaseQuantity, exports.setQuantity = _a.setQuantity;
exports["default"] = cartSlice.reducer;
