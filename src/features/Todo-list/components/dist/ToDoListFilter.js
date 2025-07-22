"use strict";
exports.__esModule = true;
var todo_button_1 = require("../ui/todo-button");
var tab_1 = require("../types/tab");
var react_redux_1 = require("react-redux");
var react_redux_2 = require("react-redux");
var todo_slice_1 = require("../slice/todo-slice");
function ToDoListFilter() {
    var dispatch = react_redux_1.useDispatch();
    var tab = react_redux_2.useSelector(function (state) { return state.todos.tab; });
    return (React.createElement("div", { className: "todo-filter-container" },
        React.createElement(todo_button_1["default"], { type: "text", onClick: function () { return dispatch(todo_slice_1.changeTab(tab_1.Tab.ALL)); }, addClasses: ['todo-filter-button', "" + (tab == tab_1.Tab.ALL ? 'selected' : '')] }, "\u0412\u0441\u0435"),
        React.createElement(todo_button_1["default"], { type: "text", onClick: function () { return dispatch(todo_slice_1.changeTab(tab_1.Tab.ACTIVE)); }, addClasses: ['todo-filter-button', "" + (tab == tab_1.Tab.ACTIVE ? 'selected' : '')] }, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435"),
        React.createElement(todo_button_1["default"], { type: "text", onClick: function () { return dispatch(todo_slice_1.changeTab(tab_1.Tab.COMPLETE)); }, addClasses: ['todo-filter-button', "" + (tab == tab_1.Tab.COMPLETE ? 'selected' : '')] }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435")));
}
exports["default"] = ToDoListFilter;
