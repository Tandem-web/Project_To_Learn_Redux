import { useContext } from "react";
import TodoButton from "../ui/todo-button";
import { Tab } from "../types/tab";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeTab } from "../slice/todo-slice";

function ToDoListFilter() {
    const dispatch:AppDispatch = useDispatch();
    const tab = useSelector((state: RootState) => state.todos.tab);
    return (
        <div className="todo-filter-container">
            <TodoButton 
                type="text" 
                onClick={() => dispatch(changeTab(Tab.ALL))} 
                addClasses={['todo-filter-button', `${tab == Tab.ALL ? 'selected' : ''}`]}
            >
                Все
            </TodoButton>
            <TodoButton 
                type="text" 
                onClick={() => dispatch(changeTab(Tab.ACTIVE))}  
                addClasses={['todo-filter-button', `${tab == Tab.ACTIVE ? 'selected' : ''}`]}>
                Активные
            </TodoButton>                
            <TodoButton 
                type="text" 
                onClick={() => dispatch(changeTab(Tab.COMPLETE))} 
                addClasses={['todo-filter-button', `${tab == Tab.COMPLETE ? 'selected' : ''}`]}
            >
                Выполненные
            </TodoButton>
        </div>
    );
}

export default ToDoListFilter;