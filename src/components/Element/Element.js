import cn from 'classnames';
import styles from './Element.module.scss';
import icon from './icons/pin.png';

export const Element = ({name, pin, img, id, link, style, clickHandler}) => {

    const hoverHandler = (e) => {
        if (e.target.classList.contains(styles.pin)) {
            e.target.parentElement.classList.toggle(styles.hover);
        }
    }

    return (
        <div className={styles.element} style={style}>
            <img src={`/elements/${id}.png`} style={img} alt={name} />
            <img src={icon} style={pin} alt="2x2" className={styles.pin} data-link={link}
                 onMouseEnter={hoverHandler}
                 onMouseLeave={hoverHandler}
                 onClick={clickHandler}
                />
        </div>
    );
};
