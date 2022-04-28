import styles from './Burger.module.scss';
import burger from '../../resources/icons/burger.svg';
import close from '../../resources/icons/close.svg';

export const Burger = ({opened, handler}) => {
    return (
        <div className={styles.burger} onClick={handler}>
            <img src={!opened ? burger : close} alt="Меню"/>
        </div>
    );
};
