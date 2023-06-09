import React from "react";
import styles from "../styles/modules/button.module.scss";

const buttonTypes = {
    primary: "primary",
    secondary: "secondary"
}
function Button ({children, style = "primary", type, clickHandler}) {
    let formatStyle = `button--${style}`;
    const classStyle = `${styles.button} ${styles[formatStyle]}`;

    return(
        <button
            className={classStyle}
            onClick={clickHandler}
            type={type === 'submit' ? 'submit' : 'button'}
        >{children}</button>
    )
}
export default Button;