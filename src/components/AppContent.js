import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import styles from '../styles/modules/app.module.scss';
import {AnimatePresence, motion} from "framer-motion";

function AppContent() {
    const todos = useSelector(state => state.todo.todoList);
    const filterStatus = useSelector(state => state.todo.filterStatus);

    const filterTodo = todos.filter(el => {
        if (filterStatus === 'all') {
            return true
        }

        return el.status === filterStatus
    });

    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        },
    }

    const item = {
        hidden: {opacity: 0},
        show: {opacity: 1},
    }

    return (
        <motion.div className={styles.content__wrapper}
                    variants={container}
                    initial="hidden"
                    animate="show">
            <AnimatePresence>
                {filterTodo.map(el => {
                    return <TodoItem key={el.id} todo={el}/>
                }).reverse()}
            </AnimatePresence>

            {filterTodo.length === 0 && <motion.p variants={item} className={styles.emptyText}>No Todo Found</motion.p>}
        </motion.div>
    );
}

export default AppContent;