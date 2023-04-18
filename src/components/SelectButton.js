import React from "react";
import styles from "../styles/modules/button.module.scss";
function SelectButton ({children, ...rest}) {
    return (
        <>
            <select name="" {...rest} className={`${styles.button} ${styles.button__select}`}>
                {children}
            </select>
        </>
    )
}

export default SelectButton;