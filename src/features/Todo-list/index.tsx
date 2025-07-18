import ToDoList from "./components/ToDoList";
import ToDoListFilter from "./components/ToDoListFilter";
import ToDoListHeader from "./components/ToDoListHeader";
import "./styles/index.scss"


function ToDo() {
    
    return (    
        <div className='todo-container'>
            <ToDoListHeader/>
            <ToDoListFilter/>
            <ToDoList/>
        </div>
    );
}
export default ToDo;