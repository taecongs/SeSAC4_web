import React from "react";
import styles from "styles/components/HorizontalProgress.module.scss";

const HorizontalProgress = ({ scroll }) => {
    return (
        <div className={styles.container}>
            <div className={styles.progress} style={{ width: scroll }} />
        </div>
    );
};

export default HorizontalProgress;