"use strict";
exports.__esModule = true;
var StoreCardLoader_1 = require("../StoreCard/StoreCardLoader");
var store_apiSlice_1 = require("../../api/store-apiSlice");
var StoreCard_1 = require("../StoreCard/StoreCard");
function FavoritesCardWrap(prop) {
    var productId = prop.productId;
    var _a = store_apiSlice_1.useGetProductByIdQuery(productId), product = _a.data, isLoading = _a.isLoading, error = _a.error;
    if (isLoading)
        return React.createElement(StoreCardLoader_1["default"], { key: "store-card-loader-" + productId });
    if (!product)
        return null;
    return (React.createElement(StoreCard_1["default"], { key: "store-card-" + productId, productInfo: product, productId: productId }));
}
exports["default"] = FavoritesCardWrap;
