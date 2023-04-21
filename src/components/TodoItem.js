import React, {useEffect, useState} from 'react';
import styles from '../styles/modules/todoItem.module.scss'
import {MdDelete, MdEdit} from "react-icons/md";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../redux/slices/todoSlice";
import {toast} from "react-hot-toast";
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";
import {motion} from "framer-motion";

const TodoItem = ({todo}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(todo.status === 'complete') {
            setChecked(true);
        }else {
            setChecked(false);
        }
    }, [todo.status])


    let styleClass = '';

    if (checked) {
         styleClass = styles[`todoText--complete`];
    }

    const deleteHandler = () => {
     dispatch(deleteTodo(todo.id));
        toast.success('Todo Deleted!')
    }

    const checkHandler = () => {
        setChecked(!checked);
        dispatch(updateTodo({
            ...todo,
            status: !checked ? "complete" : "incomplete",
        }));
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    }

    return (
        <>
            <motion.div variants={item} className={`${styles.item} ${styleClass}`}>
                <div className={styles.todoDetails}>
                    <CheckButton checked={checked} checkHandler={checkHandler}/>
                    <div className={styles.texts}>
                        <p className={styles.todoText}>{todo.title}</p>
                        <p className={styles.time}>{todo.time}</p>
                    </div>
                </div>
                <div className={styles.todoActions}>
                    <div className={styles.icon} onClick={deleteHandler}>
                        <MdDelete />
                    </div>
                    <div className={styles.icon} onClick={() => setModalOpen(true)}>
                        <MdEdit />
                    </div>
                </div>
            </motion.div>

            <TodoModal type="update" modalOpen={modalOpen} setModalOpen={setModalOpen} todo={todo}/>
        </>
    );
};

export default TodoItem;