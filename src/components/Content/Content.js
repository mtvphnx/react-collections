import styles from './Content.module.scss';
import {Element, Modal} from '../../components';
import {collection} from '../../date';
import {useState} from 'react';

export const Content = ({...props}) => {
    const [type, showModal] = useState(false);

    const onClickHandle = (e) => {
        const link = e.target.getAttribute('data-link');
        showModal('first');
    }

    const closeModal = () => {
        showModal(false);
    }

    const generateElements = ({id, name, style, img, pin, link}) => {
        return (
            <Element key={id} pin={pin} style={style} onClickHandler={onClickHandle} link={link}>
                <img src={`/elements/${id}.png`} style={img} />
            </Element>
        )
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}></div>
            {collection && collection.map(item => generateElements(item))}
            {(type === 'first') ? <Modal visible={true} onClose={closeModal}/> : null}
        </div>
    );
};
