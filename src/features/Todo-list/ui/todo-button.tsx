import React, { ReactElement, ReactNode } from "react";
// import { useTab, useTabResult } from "../hooks/useTab";
// import { useTodosResult } from "../hooks/useTodo";
// import { Tab } from "../types/tab";
import { Todo } from "../types/todos";

type ButtonTypes = 'text' | 'icon';

interface TodoButtonProps {
    type: ButtonTypes,
    addClasses?: string[];
    onClick: () => void | null;
    children?: ReactNode;
}

const TodoButton: React.FC<TodoButtonProps> = (props) => {

    const renderTextButton = () => (
        <div 
            className={`todo-button todo-button-text ${props.addClasses?.join(' ')}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );

    const renderIconButton = () => (
        <div 
            className={`todo-button todo-button-icon ${props.addClasses?.join(' ')}`}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );

    return (
        <>
            {props.type === 'text' && renderTextButton()}
            {props.type === 'icon' && renderIconButton()}
        </>
    );
};

export default TodoButton;
