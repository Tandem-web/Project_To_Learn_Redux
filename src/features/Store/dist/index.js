"use strict";
exports.__esModule = true;
var StoreList_1 = require("./components/StoreList");
require("./styles/index.scss");
var StoreHeader_1 = require("./components/StoreHeader");
var react_redux_1 = require("react-redux");
var store_state_slice_1 = require("./slices/store-state-slice");
var FavoritesList_1 = require("./components/FavoritesList");
var Cart_1 = require("./components/Cart");
function Store() {
    var showingState = react_redux_1.useSelector(function (state) { return state.storeState.showingState; });
    return (React.createElement(React.Fragment, null,
        React.createElement(StoreHeader_1["default"], null),
        showingState === store_state_slice_1.Showing.CART ? (React.createElement(Cart_1["default"], null)) : (showingState === store_state_slice_1.Showing.PRODUCTS ? (React.createElement(StoreList_1["default"], null)) : (React.createElement(FavoritesList_1["default"], null)))));
}
exports["default"] = Store;
