import {Modal, Link, Socials} from '../../components';
import icon from '../../resources/icons/close.svg';
import styles from './Article.module.scss';

export const Article = ({handler, content}) => {
    const {title, html, feature_image} = content;

    const src = feature_image.replace('https://media.2x2tv.ru/content/images/', 'https://media.2x2tv.ru/content/images/size/h550/');

    return (
        <Modal type={'second'} onClose={handler}>
            <div className={styles.close} onClick={handler}>
                <img src={icon} alt="Закрыть"/>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.picture}
                 src={src}
                 alt={title}
                 decoding="async"
                 loading="lazy"/>
            <div className={styles.wrapper}>
                <div className={styles.content}
                     dangerouslySetInnerHTML={{ __html: html }} />
                <Link tag={'div'}
                      text={'Вернуться к коллекциям'}
                      onClick={handler}
                      className={styles.link} />
            </div>
            <Socials className={styles.socials}/>
        </Modal>
    )
}