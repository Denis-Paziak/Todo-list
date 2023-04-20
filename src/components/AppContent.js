import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import styles from '../styles/modules/app.module.scss'
function AppContent() {
    const todos = useSelector(state => state.todo.todoList);
    const filterStatus = useSelector(state => state.todo.filterStatus);

    const filterTodo = todos.filter(el => {
       if (filterStatus === 'all') {
           return true
       }

       return  el.status === filterStatus
    });

    return (
        <div className={styles.content__wrapper}>
            {filterTodo.map(el => {
                return <TodoItem key={el.id} todo={el} />
            }).reverse()}
        </div>
    );
}

export default AppContent;