import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import styles from '../styles/modules/app.module.scss'
function AppContent() {
    const todos = useSelector(state => state.todo.todoList);

    return (
        <div className={styles.content__wrapper}>
            {todos.map(el => {
                return <TodoItem key={el.id} todo={el} />
            }).reverse()}

        </div>
    );
}

export default AppContent;