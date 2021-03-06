import {Modal, Link, Socials} from '../../components';
import icon from '../../resources/icons/close.svg';
import styles from './Article.module.scss';

export const Article = ({handler, content}) => {
    const {title, html, feature_image} = content;

    const src = feature_image.replace('https://media.2x2tv.ru/content/images/', 'https://media.2x2tv.ru/content/images/size/h550/');

    const sharing = [
        {id: 0, link: `https://vk.com/share.php?url=${'https://media.2x2tv.ru'}&title=${title}&image=${src}`},
        {id: 1, link: `https://t.me/share/url?url=${'https://media.2x2tv.ru'}&text=${title}`},
        {id: 2, link: `https://connect.ok.ru/offer?url=${'https://media.2x2tv.ru'}&title=${title}&imageUrl=${src}`},
    ];

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
            <Socials data={sharing} className={styles.socials}/>
        </Modal>
    )
}