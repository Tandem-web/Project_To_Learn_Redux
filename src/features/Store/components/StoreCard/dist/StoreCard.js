"use strict";
exports.__esModule = true;
var fa6_1 = require("react-icons/fa6");
// import { Product } from "../../model/types";
var react_redux_1 = require("react-redux");
var store_state_slice_1 = require("../../slices/store-state-slice");
// import { toggleFavorite } from "../../slices/shit/favorite-slice";
var react_redux_2 = require("react-redux");
var rtk_product_slice_1 = require("../../slices/rtk-product-slice");
var rtk_cart_slice_1 = require("../../slices/rtk-cart-slice");
var StoreCard = function (props) {
    var productInfo = props.productInfo, productId = props.productId;
    var dispatch = react_redux_1.useDispatch();
    var favorites = react_redux_2.useSelector(function (state) { return state.products.favorites; });
    var favoriteIds = Object.keys(favorites).filter(function (id) { return favorites[Number(id)]; });
    var inFavorite = favoriteIds.includes(String(productId));
    var cartItems = react_redux_2.useSelector(function (state) { return state.cart.cartProductIds; });
    var inCart = cartItems.find(function (productId) { return productId === productInfo.id; }) ? true : false;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "card-wrapper" },
            React.createElement("div", { className: "card-top-wrapper" },
                React.createElement("button", { className: "card-app-to-favorite " + (inFavorite ? 'favorite' : ''), onClick: function () { return dispatch(rtk_product_slice_1.toggleFavorite(productId)); } },
                    React.createElement(fa6_1.FaHeart, null)),
                React.createElement("div", { className: "card-thumbnail-wrap" },
                    React.createElement("img", { width: "516", height: "688", className: "card-thumbnail", src: productInfo.images[0], alt: productInfo.title }))),
            React.createElement("div", { className: "card-middle-wrapper" },
                React.createElement("div", { className: "card-price-wrap" },
                    React.createElement("span", { className: "card-price" },
                        "$",
                        productInfo.price)),
                React.createElement("div", { className: "card-product-name-wrap" },
                    React.createElement("span", { className: "card-product-category" }, productInfo.category.name),
                    React.createElement("span", { className: "card-product-name" },
                        React.createElement("span", { className: "card-product-name-separator" }, " / "),
                        productInfo.title))),
            React.createElement("div", { className: "card-bottom-wrapper" }, inCart ? (React.createElement("button", { className: "card-button-add-to-basket card-button-in-busket", onClick: function () { return dispatch(store_state_slice_1.changeShowingState(store_state_slice_1.Showing.CART)); } }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435")) : (React.createElement("button", { className: "card-button-add-to-basket", onClick: function () { return dispatch(rtk_cart_slice_1.addToCart(productId)); } },
                React.createElement(fa6_1.FaCartShopping, null),
                "\u041A\u0443\u043F\u0438\u0442\u044C"))))));
};
exports["default"] = StoreCard;
