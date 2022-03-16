import styles from './Burger.module.scss';
import icon from './burger.svg';

export const Burger = ({...props}) => {
    return (
        <div className={styles.burger} {...props}>
            <img src={icon} alt="Меню"/>
        </div>
    );
};
