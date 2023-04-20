import React from "react";
import styles from "../styles/modules/button.module.scss";
import {useDispatch} from "react-redux";
import {updateFilterStatus} from "../redux/slices/todoSlice";

function SelectButton ({children, ...rest}) {
    const dispatch = useDispatch();
    const filterHandler = (e) => {
       dispatch(updateFilterStatus(e.target.value));
    }

    return (
        <>
            <select name="" {...rest} className={`${styles.button} ${styles.button__select}`} onChange={filterHandler}>
                {children}
            </select>
        </>
    )
}

export default SelectButton;