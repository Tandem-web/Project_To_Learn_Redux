"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.decrementByAmount = exports.incrementByAmount = exports.decrement = exports.increment = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: 0
};
var counterSlice = toolkit_1.createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: function (state) {
            return __assign(__assign({}, state), { value: state.value + 1 });
        },
        decrement: function (state) {
            return __assign(__assign({}, state), { value: state.value - 1 });
        },
        incrementByAmount: function (state, action) {
            return __assign(__assign({}, state), { value: state.value + action.payload });
        },
        decrementByAmount: function (state, action) {
            return __assign(__assign({}, state), { value: state.value - action.payload });
        }
    }
});
exports.increment = (_a = counterSlice.actions, _a.increment), exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount, exports.decrementByAmount = _a.decrementByAmount;
exports["default"] = counterSlice.reducer;
