import React, {useState} from "react";
import Button from "./Button";
import SelectButton from "./SelectButton";
import styles from "../styles/modules/app.module.scss";
import TodoModal from "./TodoModal";

function AppHeader () {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true)
    }

    return (
        <>
            <div className={styles.appHeader}>
                <Button clickHandler={openModal}>Add Task</Button>
                <SelectButton id="status" >
                    <option value="all">All</option>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                </SelectButton>
            </div>
            <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </>
    )
}

export default AppHeader;