import React from 'react';
import styles from "../styles/modules/todoItem.module.scss";
import {motion} from "framer-motion";

const CheckButton = ({checked, checkHandler}) => {

    const checkAnim = {
        checked: {
            pathLength: 1
        },
        unChecked: {
            pathLength: 0
        },
    }

    const divAnim = {
        checked: {
            background: "var(--primaryPurple)"
        },
        unChecked: {
            background: "var(--gray-1)"
        },
    }

    return (
        <motion.div className={styles.svgBox}
                    animate={checked ? "checked" : "unChecked"}
                    variants={divAnim}
                    onClick={checkHandler}>
            <motion.svg  className={styles.svgBox.svg} viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    animate={checked ? "checked" : "unChecked"}
                    variants={checkAnim}
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="6"
                    d="M1.5 22L16 36.5L51.5 1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                ></motion.path>
            </motion.svg>
        </motion.div>
    );
};

export default CheckButton;
