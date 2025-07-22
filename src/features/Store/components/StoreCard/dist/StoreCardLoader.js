"use strict";
exports.__esModule = true;
var fa6_1 = require("react-icons/fa6");
var StoreCardLoader = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "card-wrapper" },
            React.createElement("div", { className: "card-top-wrapper" },
                React.createElement("button", { className: "card-app-to-favorite card-app-to-favorite-loader" },
                    React.createElement(fa6_1.FaHeart, null)),
                React.createElement("div", { className: "card-thumbnail-wrap card-thumbnail-loader" })),
            React.createElement("div", { className: "card-middle-wrapper" },
                React.createElement("div", { className: "card-price-wrap" },
                    React.createElement("span", { className: "card-price" })),
                React.createElement("div", { className: "card-product-name-wrap" },
                    React.createElement("span", { className: "card-product-category card-product-category-loader" }),
                    React.createElement("span", { className: "card-product-name card-product-name-loader" },
                        React.createElement("span", { className: "card-product-name-separator" }, " / "),
                        React.createElement("span", { className: "card-product-name-span" })))),
            React.createElement("div", { className: "card-bottom-wrapper" },
                React.createElement("button", { className: "card-button-add-to-basket card-button-add-to-basket-loader" },
                    React.createElement(fa6_1.FaCartShopping, null))))));
};
exports["default"] = StoreCardLoader;
