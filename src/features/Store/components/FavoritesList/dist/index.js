"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var FavoriteWrap_1 = require("./FavoriteWrap");
function FavoritesList() {
    var favorites = react_redux_1.useSelector(function (state) { return state.products.favorites; });
    var favoriteIds = Object.keys(favorites).filter(function (id) { return favorites[Number(id)]; });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "store-list-cards-wrapper" }, favoriteIds.map(function (id) { return (React.createElement(FavoriteWrap_1["default"], { key: "store-favorites-wrap-" + id, productId: Number(id) })); }))));
}
exports["default"] = FavoritesList;
