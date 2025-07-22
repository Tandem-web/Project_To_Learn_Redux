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
exports.changeTab = exports.toggleTodo = exports.deleteTodo = exports.addTodo = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var tab_1 = require("../types/tab");
var initialState = {
    todos: {},
    tab: tab_1.Tab.ALL
};
var todoState = toolkit_1.createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: function (state, action) {
            var addTodo = action.payload;
            state.todos[addTodo.id] = addTodo;
        },
        deleteTodo: function (state, action) {
            delete state.todos[action.payload];
        },
        toggleTodo: function (state, action) {
            var todoId = action.payload;
            var todo = state.todos[todoId];
            if (todo) {
                state.todos[todoId] = __assign(__assign({}, todo), { complete: !todo.complete });
            }
        },
        changeTab: function (state, action) {
            state.tab = action.payload;
        }
    }
});
exports.addTodo = (_a = todoState.actions, _a.addTodo), exports.deleteTodo = _a.deleteTodo, exports.toggleTodo = _a.toggleTodo, exports.changeTab = _a.changeTab;
exports["default"] = todoState.reducer;
