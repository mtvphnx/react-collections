import styles from './Element.module.scss';
import icon from './icons/pin.png';

export const Element = ({children, pin, ...props}) => {
    return (
        <div className={styles.element} {...props}>
            {children}
            <img src={icon} style={pin} alt="2x2" className={styles.pin}/>
        </div>
    );
};
