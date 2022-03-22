import styles from "./Canvas.module.scss";
import React, {useState} from "react";
import {Header} from '../../components'

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const Canvas = ({...props}) => {

    const [welcome, toggleWelcome] = useState(true);

    const handleClick = () => {
        toggleWelcome(welcome => !welcome);
    }

    const scrollableNodeRef = React.createRef();

    return (
        <>
            <Header/>
            <div className={styles.canvas} {...props}>
                <SimpleBar style={{maxHeight: window.innerHeight - 40}}
                           scrollableNodeProps={{ref: scrollableNodeRef}}>
                    <div className={styles.block}></div>
                </SimpleBar>
            </div>
        </>
    );
};
