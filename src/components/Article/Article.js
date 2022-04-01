import styles from './Article.module.scss';
import {Modal} from '../../components';

export const Article = ({onClose, content}) => {
    const {title, html, feature_image, excerpt} = content;

    return (
        <Modal visible={true} type={'second'} onClose={onClose}>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.picture} src={feature_image} alt={title}/>
            <div className={styles.wrapper}>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Modal>
    )
}