import { FaCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import TodoButton from "../ui/todo-button";
import { useMemo } from "react";
import { Todos } from "../types/todos";
import { Tab } from "../types/tab";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../slice/todo-slice";
import { filterTodos } from "../utils/filterTodo";


const TodoList:React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const tab = useSelector((state: RootState) => state.todos.tab);

    const visibleTodos = useMemo(
        () => filterTodos(Object.values(todos), tab),
        [todos, tab]
    );

    return (
        <>
            <div className="todo-list-container">
                <ul className="todo-list">
                    {
                        visibleTodos.map((todo) => (
                            <li key={todo.id} className={`todo-list-item ${todo.complete ? 'complete' : ''}`}>
                                <div className="todo-list-item-text">
                                    {todo.text}
                                </div>
                                <div className="todo-list-item-buttons">
                                    {
                                        todo.complete ? null 
                                        : (
                                            <TodoButton type="icon" onClick={() => dispatch(toggleTodo(todo.id))} addClasses={['check']}>
                                                <FaCheck/>
                                            </TodoButton>
                                        )
                                    }
                                    <TodoButton type="icon" onClick={() => dispatch(deleteTodo(todo.id))} addClasses={['trash']}>
                                        <FaTrash/>
                                    </TodoButton>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default TodoList;