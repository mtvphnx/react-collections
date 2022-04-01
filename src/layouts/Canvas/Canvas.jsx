import {useState} from 'react';
import {Header, Modal, Author, Link, Content} from '../../components'
import cn from 'classnames';
import {author} from '../../date';
import styles from './Canvas.module.scss';

export const Canvas = ({...props}) => {

    const [show, setModal] = useState(true);

    const onClickHandle = () => setModal(!show);

    const generateText = ({id, text}) => {
        const little = <p key={id} className={cn('text-small', styles.little)}>{text}</p>,
            big = <p key={id} className={cn('text-body', styles.big)}>{text}</p>

        return (id < 2) ? big : little;
    }

    const modalContent = (
        <div className={styles.modal}>
            <Author />
            {author && author.map(item => generateText(item))}
            <Link tag={'div'} text="Смотреть коллекцию" onClick={onClickHandle}/>
        </div>
    )

    return (
        <>
            <Header/>
            {show ? <Modal visible={show} type={'big'} onClose={onClickHandle}>{modalContent}</Modal> : null}
            <div className={styles.canvas} {...props}>
                <Content/>
            </div>
        </>
    );
};
