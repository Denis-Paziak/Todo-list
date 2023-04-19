import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

function AppContent() {
    const todos = useSelector(state => state.todo.todoList);
    return (
        <>{
            todos.map(el => {
                return <TodoItem key={el.id} todo={el}/>
            }).reverse()
        }</>
    );
}

export default AppContent;