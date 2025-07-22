"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
function CartSidebar() {
    var totalPrice = react_redux_1.useSelector(function (state) { return state.cart.cartInfo.totalPrice; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cart-container-sidebar" },
            React.createElement("div", { className: "cart-order" },
                React.createElement("div", { className: "cart-order__total" },
                    React.createElement("span", null, "\u0418\u0442\u043E\u0433\u043E"),
                    React.createElement("span", null,
                        "$ ",
                        totalPrice))))));
}
exports["default"] = CartSidebar;
