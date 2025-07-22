"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoButton = function (props) {
    var renderTextButton = function () {
        var _a;
        return (react_1["default"].createElement("div", { className: "todo-button todo-button-text " + ((_a = props.addClasses) === null || _a === void 0 ? void 0 : _a.join(' ')), onClick: props.onClick }, props.children));
    };
    var renderIconButton = function () {
        var _a;
        return (react_1["default"].createElement("div", { className: "todo-button todo-button-icon " + ((_a = props.addClasses) === null || _a === void 0 ? void 0 : _a.join(' ')), onClick: props.onClick }, props.children));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        props.type === 'text' && renderTextButton(),
        props.type === 'icon' && renderIconButton()));
};
exports["default"] = TodoButton;
