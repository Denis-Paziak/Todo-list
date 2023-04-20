import React, {useEffect, useState} from 'react';
import styles from "../styles/modules/modal.module.scss";
import {MdOutlineClose} from "react-icons/md";
import Button from "./Button";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/slices/todoSlice";
import {v4} from "uuid";
import {toast} from "react-hot-toast";

const TodoModal = ({modalOpen, setModalOpen, type}) => {
    const [title, setTitle] = useState('');
    const [typeText, setTypeText] = useState('Add');
    const [status, setStatus] = useState('incomplete');
    const dispatch = useDispatch();

    useEffect(() => {
        if (type === "update") {
            setTypeText("Update");
        }
    },[typeText]);

    const closeModal = () => {
        setModalOpen(false)
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
        }

        if(type === "update") {
            console.log("update");
        }

        setTitle("");
        closeModal();
    }

    if(!modalOpen) return <></>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
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
                               onChange={(e) => {setTitle(e.target.value)}} />
                    </label>
                    <label htmlFor="status">
                        Status
                        <select name="status"
                                id="status"
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
            </div>
        </div>
    );
};

export default TodoModal;