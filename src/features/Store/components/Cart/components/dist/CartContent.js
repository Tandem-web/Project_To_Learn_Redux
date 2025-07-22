"use strict";
exports.__esModule = true;
var CartItem_1 = require("./CartItem");
var react_redux_1 = require("react-redux");
var store_apiSlice_1 = require("../../../api/store-apiSlice");
var texts = ['товар', 'товара', 'товаров'];
var sklonenie = function (number, txt, cases) {
    if (cases === void 0) { cases = [2, 0, 1, 1, 1, 2]; }
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
function CartContent() {
    var cardIds = react_redux_1.useSelector(function (state) { return state.cart.cartProductIds; });
    var _a = store_apiSlice_1.useGetCartProductsByIdsQuery(cardIds), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    var cartProducts = react_redux_1.useSelector(function (state) { return state.cart.cartProducts; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cart-container-content" },
            React.createElement("div", { className: "cart-content-header" },
                React.createElement("h1", null, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")),
            React.createElement("div", { className: "cart-list" }, cardIds.length > 0 ? (React.createElement(React.Fragment, null,
                React.createElement("div", null,
                    React.createElement("span", { className: "cart-list-info" }, cardIds.length + " " + sklonenie(cardIds.length, texts))),
                isLoading ? (React.createElement(React.Fragment, null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (Object.values(cartProducts).map(function (product, id) { return (React.createElement(CartItem_1["default"], { key: "cart-item-" + id, product: product })); })))) : (React.createElement("div", null,
                React.createElement("span", { className: "cart-list-info" }, "\u041D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432")))))));
}
exports["default"] = CartContent;
