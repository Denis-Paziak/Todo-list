import React, {useEffect, useState} from 'react';
import styles from "../styles/modules/modal.module.scss";
import {MdOutlineClose} from "react-icons/md";
import Button from "./Button";
import {useDispatch} from "react-redux";
import {addTodo, updateTodo} from "../redux/slices/todoSlice";
import {v4} from "uuid";
import {toast} from "react-hot-toast";
import {AnimatePresence, motion} from "framer-motion";

const TodoModal = ({modalOpen, setModalOpen, type, todo}) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');
    const [typeText, setTypeText] = useState('Add');
    const dispatch = useDispatch();

    useEffect(() => {
        if (type === "update") {
            setTypeText("Update");
            setTitle(todo.title);
            setStatus(todo.status);
        }else {
            setTitle("");
            setStatus('incomplete');
        }
    },[modalOpen]);

    const closeModal = () => {
        setModalOpen(false);
        setTitle("");
    }

    const formHandler = (e) => {
        e.preventDefault();

        if (title === "") {
            toast.error("Please enter a title.");
            return;
        }

        if(type === "add") {
            dispatch(addTodo({
                id: v4(),
                title,
                status,
                time: new Date().toLocaleDateString(),
            }));
            toast.success("Todo Added.");
            closeModal();
        }

        if(type === "update") {
            if (todo.title !== title || todo.status !== status) {
                dispatch(updateTodo({
                    ...todo,
                    title,
                    status,
                }));
                toast.success("Changes Applied.");
                closeModal();
            }else {
                toast.error("No Changes Made.");
            }
        }
    }

    const modalAnim = {
        init: {
            y: 10,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -10,
            opacity: 0
        },
    }

    return (
        <AnimatePresence>
            {modalOpen && <div className={styles.wrapper} >
                <motion.div className={styles.container}
                     initial="init"
                     animate="show"
                     variants={modalAnim}
                     exit="exit">
                    <div className={styles.closeButton}
                         onClick={() => setModalOpen(false)}>
                        <MdOutlineClose/>
                    </div>
                    <form className={styles.form} onSubmit={formHandler}>
                        <h1 className={styles.formTitle}>{typeText} Task</h1>
                        <label htmlFor="title">
                            Title
                            <input type="text"
                                   id="title"
                                   value={title}
                                   onChange={(e) => {setTitle(e.target.value)}} />
                        </label>
                        <label htmlFor="status">
                            Status
                            <select name="status"
                                    id="status"
                                    value={status}
                                    onChange={(e) => {setStatus(e.target.value)}} >
                                <option value="incomplete">Incomplete</option>
                                <option value="complete">Complete</option>
                            </select>
                        </label>
                        <div className={styles.buttonContainer}>
                            <Button type="submit">{typeText} Task</Button>
                            <Button style="secondary"
                                    clickHandler={closeModal}>Cansel
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>}

        </AnimatePresence>
    );
};

export default TodoModal;