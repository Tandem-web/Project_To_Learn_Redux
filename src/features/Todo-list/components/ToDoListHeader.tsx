import { useCallback, useRef, useState } from "react";
import TodoButton from "../ui/todo-button";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todo-slice";
import { Todo } from "../types/todos";
import { v4 as uuidv4 } from 'uuid';

const ToDoListHeader= () => {
    const dispatch:AppDispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTodo = useCallback(() => {
        const value = inputRef.current?.value.trim();
        if (value) {
            dispatch(addTodo({
                id: uuidv4(),
                text: value,
                complete: false
            }))
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }, [dispatch]);
    
    return (
        <div className="todo-header-container">
            <input 
                type="text" 
                name="todo-input-text"
                ref={inputRef} 
                id="todo-input-text" 
                placeholder="Введите вашу задачу" 
                className="todo-header-input"
            />
            
            <div className="todo-header-buttons-container">
                <TodoButton 
                    type={'text'} 
                    onClick={handleAddTodo}  
                    addClasses={['todo-add-button']}
                >
                    Добавить
                </TodoButton>
            </div>
        </div>
    );
}

export default ToDoListHeader;