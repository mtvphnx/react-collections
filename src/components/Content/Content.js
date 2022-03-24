import styles from './Content.module.scss';
import {Element} from '../../components';
import {collection} from '../../date';

export const Content = ({...props}) => {
    const onClickHandle = (e) => {
        const link = e.target.getAttribute('data-link');
        console.log(link);
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
        </div>
    );
};
