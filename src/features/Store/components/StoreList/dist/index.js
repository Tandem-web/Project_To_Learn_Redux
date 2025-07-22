"use strict";
exports.__esModule = true;
var StoreCardLoader_1 = require("../StoreCard/StoreCardLoader");
var react_redux_1 = require("react-redux");
var store_apiSlice_1 = require("../../api/store-apiSlice");
var StoreCard_1 = require("../StoreCard/StoreCard");
function StoreList() {
    var _a = store_apiSlice_1.useGetProductsQuery(), _b = _a.data, products = _b === void 0 ? [] : _b, isLoading = _a.isLoading, error = _a.error;
    var showingState = react_redux_1.useSelector(function (state) { return state.storeState.showingState; });
    // const loading = useSelector((state: RootState) => state.products.loading)
    if (isLoading) {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "store-list-cards-wrapper" }, new Array(10).fill(1).map(function (_, index) { return (React.createElement(StoreCardLoader_1["default"], { key: "store-card-loader-" + index })); }))));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "store-list-cards-wrapper" }, products.map(function (product) { return (React.createElement(StoreCard_1["default"], { key: "store-card-" + product.id, productInfo: product, productId: product.id })); }))));
}
exports["default"] = StoreList;
