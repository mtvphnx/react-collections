import cn from 'classnames';
import styles from './Element.module.scss';
import icon from './icons/pin.png';

export const Element = ({name, pin, img, id, style, clickHandler}) => {

    return (
        <div className={styles.element} style={style} onClick={clickHandler}>
            <img src={`/elements/${id}.png`} style={img} alt={name} />
            <img src={icon} style={pin} alt="2x2" className={styles.pin} />
        </div>
    );
};
