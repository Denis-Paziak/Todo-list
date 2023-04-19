import React from 'react';
import styles from '../styles/modules/todoItem.module.scss'
import {MdDelete, MdEdit} from "react-icons/md";
const TodoItem = ({todo}) => {
    let styleClass = '';
    if (todo.status === 'complete') {
         styleClass = styles[`todoText--complete`];
    }
    return (
        <div className={`${styles.item} ${styleClass}`}>
            <div className={styles.todoDetails}>
                []
                <div className={styles.texts}>
                    <p className={styles.todoText}>{todo.title}</p>
                    <p className={styles.time}>{todo.time}</p>
                </div>
            </div>
            <div className={styles.todoActions}>
                <div className={styles.icon}>
                    <MdDelete />
                </div>
                <div className={styles.icon}>
                    <MdEdit />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;