import React from "react";
import Button from "./Button";
import SelectButton from "./SelectButton";
import styles from "../styles/modules/app.module.scss";

function AppHeader () {
    return (
        <div className={styles.appHeader}>
            <Button>button</Button>
            <SelectButton id="status">
                <option value="all">All</option>

                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </SelectButton>
        </div>
    )
}

export default AppHeader;