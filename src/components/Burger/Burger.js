import styles from './Burger.module.scss';
import burger from './icons/burger.svg';
import close from './icons/close.svg';

export const Burger = ({opened, ...props}) => {
    return (
        <div className={styles.burger}>
            <img src={!opened ? burger : close} alt="Меню"/>
        </div>
    );
};
