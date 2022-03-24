import styles from './Content.module.scss';
import {Element} from '../../components';
import {collection} from '../../date';

export const Content = ({...props}) => {
    function handleClick(e) {
        const link = e.target.getAttribute('data-link');
    }

    const generateElements = ({id, name, style, img, pin}) => {
        return (
            <Element key={id} pin={pin} style={style}>
                <img src={`/elements/${id}.png`} style={img} data-link={id} onClick={handleClick}/>
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
