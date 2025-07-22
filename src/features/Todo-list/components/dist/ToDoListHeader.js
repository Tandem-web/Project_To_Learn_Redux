"use strict";
exports.__esModule = true;
var react_1 = require("react");
var todo_button_1 = require("../ui/todo-button");
var react_redux_1 = require("react-redux");
var todo_slice_1 = require("../slice/todo-slice");
var uuid_1 = require("uuid");
var ToDoListHeader = function () {
    var dispatch = react_redux_1.useDispatch();
    var inputRef = react_1.useRef(null);
    var handleAddTodo = react_1.useCallback(function () {
        var _a;
        var value = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value.trim();
        if (value) {
            dispatch(todo_slice_1.addTodo({
                id: uuid_1.v4(),
                text: value,
                complete: false
            }));
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }, [dispatch]);
    return (React.createElement("div", { className: "todo-header-container" },
        React.createElement("input", { type: "text", name: "todo-input-text", ref: inputRef, id: "todo-input-text", placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0437\u0430\u0434\u0430\u0447\u0443", className: "todo-header-input" }),
        React.createElement("div", { className: "todo-header-buttons-container" },
            React.createElement(todo_button_1["default"], { type: 'text', onClick: handleAddTodo, addClasses: ['todo-add-button'] }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
};
exports["default"] = ToDoListHeader;
