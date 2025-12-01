import React from "react";
import styles from './body.module.css';

interface BodyProps {
    children?: React.ReactNode;
}

export const Body = ({children}: BodyProps) => {
    return (<div className={styles.mainBody}>
        {children }
    </div>)
}