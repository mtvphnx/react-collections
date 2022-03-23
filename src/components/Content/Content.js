import styles from './Content.module.scss';
import {Element} from '../../components';
import {collection} from '../../date';

export const Content = ({...props}) => {
    const generateElements = ({id, name, style}) => {
        return (
            <Element key={id} style={style}><img src={`/elements/${id}.png`}/></Element>
        )
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.bg}></div>
            {collection && collection.map(item => generateElements(item))}
        </div>
    );
};
