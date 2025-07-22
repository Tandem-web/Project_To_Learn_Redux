"use strict";
exports.__esModule = true;
var fa6_1 = require("react-icons/fa6");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var rtk_cart_slice_1 = require("../../../slices/rtk-cart-slice");
var rtk_product_slice_1 = require("../../../slices/rtk-product-slice");
var CartItem = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var favorites = react_redux_1.useSelector(function (state) { return state.products.favorites; });
    var favoriteIds = Object.keys(favorites).filter(function (id) { return favorites[Number(id)]; });
    var product = props.product;
    var _a = react_1.useState(product.amount), localAmount = _a[0], setLocalAmount = _a[1];
    react_1.useEffect(function () {
        setLocalAmount(product.amount);
    }, [product.amount]);
    var handleBlur = function (e) {
        var newValue = Number(e.target.value);
        dispatch(rtk_cart_slice_1.setQuantity({ id: product.info.id, quantity: newValue }));
        setLocalAmount(newValue);
    };
    var inFavorite = favoriteIds.includes(String(product.info.id));
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "cart-item-container" },
            React.createElement("div", { className: "cart-item__wrap" },
                React.createElement("div", { className: "cart-item__good" },
                    React.createElement("img", { src: product.info.images[0], width: "98", height: "98", alt: product.info.title, className: "cart-item__good-img" }),
                    React.createElement("div", { className: "cart-item__good-info" },
                        React.createElement("div", { className: "cart-item__good-info-name" }, product.info.title),
                        React.createElement("div", { className: "cart-item__good-info-category" }, product.info.category.name),
                        React.createElement("div", { className: "cart-item__btns-wrap" },
                            React.createElement("button", { className: "cart-item__btn " + (inFavorite ? 'favorite' : ''), onClick: function () { return dispatch(rtk_product_slice_1.toggleFavorite(product.info.id)); } },
                                React.createElement(fa6_1.FaHeart, null)),
                            React.createElement("button", { className: "cart-item__btn", onClick: function () { return dispatch(rtk_cart_slice_1.removeFromCart(product.info.id)); } },
                                React.createElement(fa6_1.FaTrash, null))))),
                React.createElement("div", { className: "cart-item__count" },
                    React.createElement("button", { type: "button", className: "cart-item__count-button", "aria-label": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", onClick: function () { return dispatch(rtk_cart_slice_1.decreaseQuantity(product.info.id)); } },
                        React.createElement(fa6_1.FaMinus, null)),
                    React.createElement("input", { type: "number", autoComplete: "off", maxLength: 2, value: localAmount, min: "1", max: "99", onChange: function (e) { return setLocalAmount(Number(e.target.value)); }, onBlur: handleBlur, className: "cart-item__count-input" }),
                    React.createElement("button", { type: "button", className: "cart-item__count-button", "aria-label": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", onClick: function () { return dispatch(rtk_cart_slice_1.increaseQuantity(product.info.id)); } },
                        React.createElement(fa6_1.FaPlus, null))),
                React.createElement("div", { className: "cart-item__price" },
                    React.createElement("span", { className: "cart-item__price-text" },
                        React.createElement(fa6_1.FaWallet, null),
                        "$ ",
                        product.info.price * product.amount))))));
};
exports["default"] = CartItem;
