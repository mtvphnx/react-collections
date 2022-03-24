import styles from "./Canvas.module.scss";
import React, {useState} from "react";
import {Header, Modal, Author, Link, Content} from '../../components'

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {author} from '../../date';
import cn from 'classnames';

export const Canvas = ({...props}) => {

    const [show, setModal] = React.useState(true);
    const onClickHandle = (e) => {
        e.preventDefault();
        setModal(!show);
    };

    const generateText = ({id, text}) => {
        return (id < 2) ? <p key={id} className={cn('text-body', styles.big)}>{text}</p> : <p key={id} className={cn('text-small', styles.little)}>{text}</p>;
    }

    const scrollableNodeRef = React.createRef();

    return (
        <>
            <Header/>
            <Modal visible={show} type={'big'} onClose={onClickHandle}>
                <div className={styles.modal}>
                    <Author />
                    {author && author.map(item => generateText(item))}
                    <Link url="#" text="Смотреть коллекцию" onClick={onClickHandle}/>
                </div>
            </Modal>
            <div className={styles.canvas} {...props}>
                <SimpleBar style={{maxHeight: window.innerHeight - 40}}
                           scrollableNodeProps={{ref: scrollableNodeRef}}>
                    <div className={styles.block}>
                        <Content/>
                    </div>
                </SimpleBar>
            </div>
        </>
    );
};
