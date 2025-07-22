"use strict";
exports.__esModule = true;
exports.filterTodos = void 0;
function filterTodos(todos, tab) {
    return todos.filter(function (todo) {
        if (tab === 'all') {
            return true;
        }
        else if (tab === 'active') {
            return !todo.complete;
        }
        else if (tab === 'complete') {
            return todo.complete;
        }
    });
}
exports.filterTodos = filterTodos;
