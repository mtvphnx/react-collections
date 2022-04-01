import styles from './Article.module.scss';
import {Modal, Link, Socials} from '../../components';
import icon from '../Burger/icons/close.svg';

export const Article = ({onClose, content}) => {
    const {title, html, feature_image} = content;
    const image =  feature_image.replace('https://media.2x2tv.ru/content/images/', 'https://media.2x2tv.ru/content/images/size/w1280/');

    return (
        <Modal visible={true} type={'second'} onClose={onClose}>
            <div className={styles.close} onClick={onClose}>
                <img src={icon} alt="Закрыть"/>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.picture} src={image} alt={title}/>
            <div className={styles.wrapper}>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
                <Link tag={'div'} text={'Вернуться к коллекциям'} onClick={onClose} className={styles.link} />
            </div>
            <Socials className={styles.socials}/>
        </Modal>
    )
}