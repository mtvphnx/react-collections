import styles from "./Canvas.module.scss";
import React, {useState} from "react";
import {Header, Modal, Author, Link} from '../../components'

import cn from 'classnames';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const Canvas = ({...props}) => {

    const [show, setModal] = React.useState(true);
    const handleClick = () => setModal(!show);

    const scrollableNodeRef = React.createRef();

    return (
        <>
            <Header/>
            <Modal visible={show} type={'big'} onClose={handleClick}>
                <div className={styles.modal}>
                    <Author />
                    <p className={cn('text-body', styles.big)}>Я сижу перед пустым стеллажом — раньше он был полностью заставлен фигурками, а теперь на нём коллекционируется пыль.</p>
                    <p className={cn('text-body', styles.big)}>Я выкручиваю тряпку и сметаю это собрание мелких частиц. Ставлю коллекционного киднеровского крота. Первое, что я чувствую, — цунами из ностальгии.</p>
                    <p className={cn('text-small', styles.little)}>Меня переносит в детство, где я за полсекунды распаковываю киндер и открываю пластиковый желток. Определённо стоит снова собирать игрушки. Почему я перестала? Сейчас вообще кто-нибудь коллекционирует? Зачем заставлять полку одинаковыми фигурками и мониторить ночами редкие экземпляры во времена, когда мы пытаемся вылезти из вещевых завалов?</p>
                    <p className={cn('text-small', styles.little)}>Кажется, целью может быть всё что угодно. И для получения всех возможных ответов только один путь — собрать коллекцию коллекционеров.</p>
                    <p className={cn('text-small', styles.little)}>Мы поговорили с молодыми собирателями, как коллекциони-рование можно конвертировать в медитацию и почему в 2022 году особенно важно иметь что-то, что можно «пощупать».</p>
                    <p className={cn('text-small', styles.little)}>Восемнадцать историй, Восемнадцать причин коллекционировать. Больше двух тысяч предметов в коллекциях. Жёлтые резиновые утки, водка и фигурки Warhammer — добро пожаловать на полку современных коллекций.</p>
                    <Link url="#" text="Смотреть коллекцию" onClick={handleClick}/>
                </div>
            </Modal>
            <div className={styles.canvas} {...props}>
                <SimpleBar style={{maxHeight: window.innerHeight - 40}}
                           scrollableNodeProps={{ref: scrollableNodeRef}}>
                    <div className={styles.block}></div>
                </SimpleBar>
            </div>
        </>
    );
};
