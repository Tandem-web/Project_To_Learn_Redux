"use strict";
exports.__esModule = true;
var CartContent_1 = require("./components/CartContent");
var CartSidebar_1 = require("./components/CartSidebar");
function Cart() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cart-container" },
            React.createElement(CartContent_1["default"], null),
            React.createElement(CartSidebar_1["default"], null))));
}
exports["default"] = Cart;
