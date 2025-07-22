"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var counterSlice_1 = require("./counterSlice");
require("./styles/index.scss");
function Counter() {
    var count = react_redux_1.useSelector(function (state) { return state.counter.value; });
    var dispatch = react_redux_1.useDispatch();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "counter-example" },
            React.createElement("h1", null, count),
            React.createElement("button", { onClick: function () { return dispatch(counterSlice_1.incrementByAmount(5)); } }, "+5"),
            React.createElement("button", { onClick: function () { return dispatch(counterSlice_1.increment()); } }, "+1"),
            React.createElement("button", { onClick: function () { return dispatch(counterSlice_1.decrement()); } }, "-1"),
            React.createElement("button", { onClick: function () { return dispatch(counterSlice_1.decrementByAmount(5)); } }, "-5"))));
}
exports["default"] = Counter;
