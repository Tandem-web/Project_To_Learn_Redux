"use strict";
exports.__esModule = true;
var fa6_1 = require("react-icons/fa6");
var react_redux_1 = require("react-redux");
var react_redux_2 = require("react-redux");
var store_state_slice_1 = require("../../slices/store-state-slice");
function StoreHeader() {
    var dispatch = react_redux_2.useDispatch();
    var favorites = react_redux_1.useSelector(function (state) { return state.products.favorites; });
    var favoriteIds = Object.keys(favorites).filter(function (id) { return favorites[Number(id)]; });
    var cartItems = react_redux_1.useSelector(function (state) { return state.cart.cartProductIds; });
    var showingState = react_redux_1.useSelector(function (state) { return state.storeState.showingState; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "store-header-container" },
            React.createElement("div", { className: "store-header-button-wrapper" },
                React.createElement("button", { className: "store-header-button button-with-amount", onClick: function () {
                        showingState === store_state_slice_1.Showing.FAVORITE ? dispatch(store_state_slice_1.changeShowingState(store_state_slice_1.Showing.PRODUCTS)) : dispatch(store_state_slice_1.changeShowingState(store_state_slice_1.Showing.FAVORITE));
                    } },
                    React.createElement("div", { className: "amount-favorite-items" }, favoriteIds.length),
                    React.createElement(fa6_1.FaHeart, null))),
            React.createElement("div", { className: "store-header-button-wrapper" },
                React.createElement("button", { className: "store-header-button button-with-amount", onClick: function () {
                        showingState === store_state_slice_1.Showing.CART ? dispatch(store_state_slice_1.changeShowingState(store_state_slice_1.Showing.PRODUCTS)) : dispatch(store_state_slice_1.changeShowingState(store_state_slice_1.Showing.CART));
                    } },
                    React.createElement("div", { className: "amount-favorite-items" }, cartItems.length),
                    React.createElement(fa6_1.FaCartShopping, null))))));
}
exports["default"] = StoreHeader;
