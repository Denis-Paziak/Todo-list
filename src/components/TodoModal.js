import React, {useState} from 'react';
import styles from "../styles/modules/modal.module.scss";
import {MdOutlineClose} from "react-icons/md";
import Button from "./Button";

const TodoModal = ({modalOpen, setModalOpen}) => {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');

    const closeModal = () => {
        setModalOpen(false)
    }

    const formHandler = (e) => {
        e.preventDefault();
        console.log(title, status)
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
                    <h1 className={styles.formTitle}>Add Task</h1>
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
                        <Button type="submit" >Add Task</Button>
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