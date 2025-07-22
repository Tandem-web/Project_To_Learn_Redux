"use strict";
exports.__esModule = true;
var fa6_1 = require("react-icons/fa6");
var fa6_2 = require("react-icons/fa6");
var todo_button_1 = require("../ui/todo-button");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_redux_2 = require("react-redux");
var todo_slice_1 = require("../slice/todo-slice");
var filterTodo_1 = require("../utils/filterTodo");
var TodoList = function () {
    var dispatch = react_redux_2.useDispatch();
    var todos = react_redux_1.useSelector(function (state) { return state.todos.todos; });
    var tab = react_redux_1.useSelector(function (state) { return state.todos.tab; });
    var visibleTodos = react_1.useMemo(function () { return filterTodo_1.filterTodos(Object.values(todos), tab); }, [todos, tab]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "todo-list-container" },
            React.createElement("ul", { className: "todo-list" }, visibleTodos.map(function (todo) { return (React.createElement("li", { key: todo.id, className: "todo-list-item " + (todo.complete ? 'complete' : '') },
                React.createElement("div", { className: "todo-list-item-text" }, todo.text),
                React.createElement("div", { className: "todo-list-item-buttons" },
                    todo.complete ? null
                        : (React.createElement(todo_button_1["default"], { type: "icon", onClick: function () { return dispatch(todo_slice_1.toggleTodo(todo.id)); }, addClasses: ['check'] },
                            React.createElement(fa6_1.FaCheck, null))),
                    React.createElement(todo_button_1["default"], { type: "icon", onClick: function () { return dispatch(todo_slice_1.deleteTodo(todo.id)); }, addClasses: ['trash'] },
                        React.createElement(fa6_2.FaTrash, null))))); })))));
};
exports["default"] = TodoList;
