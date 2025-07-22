"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useLazyGetCartProductsByIdsQuery = exports.useLazyGetProductByIdQuery = exports.useGetCartProductsByIdsQuery = exports.useGetProductByIdQuery = exports.useGetProductsQuery = exports.api = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.api = react_1.createApi({
    reducerPath: 'api',
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1',
        prepareHeaders: function (headers) {
            headers.set('Accept', 'application/json');
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ['Product', 'Favorite', 'CartProduct'],
    endpoints: function (builder) { return ({
        getProducts: builder.query({
            query: function () { return '/products'; },
            providesTags: ['Product']
        }),
        getProductById: builder.query({
            query: function (id) { return "/products/" + id; },
            providesTags: function (result, error, id) { return [{ type: 'Product', id: id }]; }
        }),
        getCartProductsByIds: builder.query({
            //@ts-ignore
            queryFn: function (ids, api, extraOptions, baseQuery) {
                return __awaiter(this, void 0, void 0, function () {
                    var requests, responses, hasError, products;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                requests = ids.map(function (id) {
                                    return baseQuery("/products/" + id);
                                });
                                return [4 /*yield*/, Promise.all(requests)];
                            case 1:
                                responses = _a.sent();
                                hasError = responses.some(function (response) { return response.error; });
                                if (hasError) {
                                    return [2 /*return*/, { error: { status: 'FETCH_ERROR', message: 'Ошибка при получении продуктов' } }];
                                }
                                products = responses.map(function (response) { return response.data; });
                                return [2 /*return*/, { data: products }];
                        }
                    });
                });
            }
        })
    }); }
});
exports.useGetProductsQuery = exports.api.useGetProductsQuery, exports.useGetProductByIdQuery = exports.api.useGetProductByIdQuery, exports.useGetCartProductsByIdsQuery = exports.api.useGetCartProductsByIdsQuery, exports.useLazyGetProductByIdQuery = exports.api.useLazyGetProductByIdQuery, exports.useLazyGetCartProductsByIdsQuery = exports.api.useLazyGetCartProductsByIdsQuery;
