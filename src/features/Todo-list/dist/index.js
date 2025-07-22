"use strict";
exports.__esModule = true;
var ToDoList_1 = require("./components/ToDoList");
var ToDoListFilter_1 = require("./components/ToDoListFilter");
var ToDoListHeader_1 = require("./components/ToDoListHeader");
require("./styles/index.scss");
function ToDo() {
    return (React.createElement("div", { className: 'todo-container' },
        React.createElement(ToDoListHeader_1["default"], null),
        React.createElement(ToDoListFilter_1["default"], null),
        React.createElement(ToDoList_1["default"], null)));
}
exports["default"] = ToDo;
