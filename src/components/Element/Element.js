import styles from './Element.module.scss';
import icon from './icons/pin.png';
import cn from 'classnames';

export const Element = ({children, pin, onClickHandler, link, ...props}) => {

    const onMouseEnterHandler = (e) => {
        if (e.target.classList.contains(styles.pin)) {
            e.target.parentElement.classList.add(styles.hover);
        }
    }

    const onMouseLeaveHandler = (e) => {
        if (e.target.classList.contains(styles.pin)) {
            e.target.parentElement.classList.remove(styles.hover);
        }
    };

    return (
        <div className={styles.element} {...props}>
            {children}
            <img src={icon} style={pin} alt="2x2" className={styles.pin} data-link={link}
                 onMouseEnter={onMouseEnterHandler}
                 onMouseLeave={onMouseLeaveHandler}
                 onClick={onClickHandler}
                />
        </div>
    );
};
