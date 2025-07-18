import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tab } from "../types/tab";
import { Todo, Todos } from "../types/todos";

interface TodoState {
    todos: Record<Todo["id"], Todo>;
    tab: Tab
}

const initialState: TodoState = {
    todos: {},
    tab: Tab.ALL,
}

const todoState = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            const addTodo = action.payload
            state.todos[addTodo.id] = addTodo;
        },
        deleteTodo: (state, action: PayloadAction<Todo["id"]>) => {
            delete state.todos[action.payload];
        },
        toggleTodo: (state, action: PayloadAction<Todo["id"]>) => {
            const todoId = action.payload;
            const todo = state.todos[todoId];

            if (todo) {
                state.todos[todoId] = {
                    ...todo,
                    complete: !todo.complete,
                };
            }
        },

        changeTab: (state, action: PayloadAction<Tab>) => {
            state.tab = action.payload;
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo, changeTab} = todoState.actions;

export default todoState.reducer;